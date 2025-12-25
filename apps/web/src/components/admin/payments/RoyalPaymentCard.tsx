"use client"
import { supabase } from "@/lib/supabase"

export default function RoyalPaymentCard({ payment,onChange }:{ payment:any,onChange:()=>void }) {

  const act = async(state:"verified"|"rejected")=>{
    await supabase.from("payments_v2").update({ status:state }).eq("id",payment.id)
    await supabase.from("orders_v2").update({ status: state=="verified"?"paid":"rejected" }).eq("id",payment.order_id)
    onChange()
  }

  return (
    <div className="bg-white/90 rounded-2xl p-6 shadow-xl grid md:grid-cols-4 gap-6 items-center">

      <div>
        <div className="font-semibold">{payment.orders_v2.customer_name}</div>
        <div className="text-xs opacity-70">UTR: {payment.utr}</div>
      </div>

      <div>₹ {payment.amount}</div>

      <img src={payment.proof_url} className="h-24 rounded-xl border object-cover"/>

      <div className="flex gap-3">
        <button onClick={()=>act("verified")} className="px-4 py-2 bg-green-600 text-white rounded-full">Verify</button>
        <button onClick={()=>act("rejected")} className="px-4 py-2 bg-red-600 text-white rounded-full">Reject</button>
      </div>
    </div>
  )
}
