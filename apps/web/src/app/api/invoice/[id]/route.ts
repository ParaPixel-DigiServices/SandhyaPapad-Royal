import { NextResponse } from "next/server"
import { PDFDocument, rgb } from "pdf-lib"
import fontkit from "@pdf-lib/fontkit"
import { supabase } from "@/lib/supabase"
import fs from "fs"
import path from "path"

export async function GET(req: Request, ctx:{ params:Promise<{ id:string }> }) {
  const { id } = await ctx.params

  const { data: order } = await supabase.from("orders_v2").select("*").eq("id",id).single()
  const { data: items } = await supabase.from("order_items_v2").select("*").eq("order_id",id)

  if(!order) return new NextResponse("Not found",{status:404})

  const pdf = await PDFDocument.create()
  pdf.registerFontkit(fontkit)

  const fontBytes = fs.readFileSync(path.join(process.cwd(),"public/fonts/NotoSans-Regular.ttf"))
  const font = await pdf.embedFont(fontBytes)

  const page = pdf.addPage([595,842])

  const GOLD = rgb(0.85,0.68,0.25)
  const MAROON = rgb(0.48,0.1,0.08)
  const GREY = rgb(0.3,0.3,0.3)

  // Outer border
  page.drawRectangle({ x:20,y:20,width:555,height:802,borderColor:GOLD,borderWidth:2 })

  // Logo
  const logoBytes = fs.readFileSync(path.join(process.cwd(),"public/sandhyalogo.png"))
  const logo = await pdf.embedPng(logoBytes)
  page.drawImage(logo,{ x:40,y:760,width:90,height:40 })

  // Brand Header
  page.drawText("SANDHYA FOODS",{x:160,y:780,size:24,font,color:MAROON})
  page.drawText("Royal Heritage of Rajasthan",{x:160,y:756,size:10,font,color:GOLD})

  // Info blocks
  let y = 710
  const block = (t:string,x:number)=>page.drawText(t,{x,y,size:11,font,color:GREY})

  block("BILLED TO",40); block("ORDER INFO",340); y-=16
  page.drawLine({start:{x:40,y:y},end:{x:270,y:y},color:GOLD})
  page.drawLine({start:{x:340,y:y},end:{x:555,y:y},color:GOLD})
  y-=16

  block(order.customer_name,40)
  block(`Invoice #${order.id.slice(0,6)}`,340); y-=14
  block(order.phone,40)
  block(`Status: ${order.status}`,340); y-=14
  block(`${order.address}`,40); y-=14
  block(`${order.city}, ${order.state} - ${order.pincode}`,40)
  block(`Date: ${order.created_at.slice(0,10)}`,340)

  // Table header
  y -= 40
  page.drawRectangle({x:40,y:y,width:515,height:22,color:MAROON})
  page.drawText("ITEM",{x:50,y:y+6,size:11,font,color:rgb(1,1,1)})
  page.drawText("QTY",{x:340,y:y+6,size:11,font,color:rgb(1,1,1)})
  page.drawText("AMOUNT",{x:420,y:y+6,size:11,font,color:rgb(1,1,1)})

  y -= 24

  items?.forEach(i=>{
    page.drawText(i.name,{x:50,y,size:11,font,color:GREY})
    page.drawText(String(i.qty),{x:350,y,size:11,font,color:GREY})
    page.drawText(`₹ ${i.price * i.qty}`,{x:420,y,size:11,font,color:GREY})
    page.drawLine({start:{x:40,y:y-4},end:{x:555,y:y-4},color:GOLD})
    y -= 18
  })

  y -= 20
  page.drawText("TOTAL",{x:340,y,size:12,font,color:MAROON})
  page.drawText(`₹ ${order.total}`,{x:420,y,size:16,font,color:MAROON})

  const bytes = await pdf.save()

  return new NextResponse(bytes,{
    headers:{
      "Content-Type":"application/pdf",
      "Content-Disposition":`attachment; filename="Sandhya-Royal-Invoice-${order.id.slice(0,6)}.pdf"`
    }
  })
}
