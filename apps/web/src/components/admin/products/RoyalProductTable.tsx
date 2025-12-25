"use client"
import { supabase } from "@/lib/supabase"

export default function RoyalProductTable({ products,onChange }:{ products:any[], onChange:()=>void }) {
  const toggle = async(id:string,key:string,val:boolean)=>{
    await supabase.from("products").update({[key]:!val}).eq("id",id)
    onChange()
  }

  return (
    <div className="bg-white/80 rounded-2xl overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gold/20">
            <th>Name</th><th>Price</th><th>Best</th><th>Hero</th><th>Active</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p=>(
            <tr key={p.id} className="border-t">
              <td>{p.name}</td>
              <td>₹ {p.price}</td>
              <td><input type="checkbox" checked={p.is_bestseller} onChange={()=>toggle(p.id,"is_bestseller",p.is_bestseller)}/></td>
              <td><input type="checkbox" checked={p.is_featured} onChange={()=>toggle(p.id,"is_featured",p.is_featured)}/></td>
              <td><input type="checkbox" checked={p.is_active} onChange={()=>toggle(p.id,"is_active",p.is_active)}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
