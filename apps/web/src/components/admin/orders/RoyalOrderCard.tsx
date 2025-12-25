"use client"
import { supabase } from "@/lib/supabase"
import { useState } from "react"

export default function RoyalOrderCard({ order,onChange }:{ order:any,onChange:()=>void }) {
  const [note,setNote] = useState(order.admin_note || "")

  const update = async(status:string)=>{
    await supabase.from("orders_v2").update({ status, admin_note:note }).eq("id",order.id)
    onChange()
  }

  return (
    <div className="bg-white/90 rounded-2xl p-6 shadow-xl grid md:grid-cols-4 gap-6 items-center">
      <div>
        <div className="font-semibold">{order.customer_name}</div>
        <div className="text-xs opacity-70">{order.phone}</div>
        <div className="text-xs opacity-70">{order.city}</div>
      </div>

      <div>₹ {order.total}</div>

      <textarea value={note} onChange={e=>setNote(e.target.value)} placeholder="Admin note..." className="border p-2 rounded-xl"/>

      <div className="flex gap-3">
        <button onClick={()=>update("approved")} className="px-4 py-2 bg-green-600 text-white rounded-full">Approve</button>
        <button onClick={()=>update("rejected")} className="px-4 py-2 bg-red-600 text-white rounded-full">Reject</button>
      </div>
    </div>
  )
}
