"use client"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"

export default function OrderPage(){
  const { id } = useParams()

  const { data:order } = useQuery({
    queryKey:["order",id],
    queryFn: async()=> (await supabase.from("orders_v2").select("*").eq("id",id).single()).data
  })

  const { data:items } = useQuery({
    queryKey:["order-items",id],
    queryFn: async()=> (await supabase.from("order_items_v2").select("*").eq("order_id",id)).data
  })

  if(!order) return null

  return (
    <section className="min-h-screen bg-[#F6EEDC] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 shadow-2xl">

        <h1 className="font-royal text-3xl mb-6">Sandhya Foods - Invoice</h1>

        <div className="grid grid-cols-2 gap-4 text-sm mb-8">
          <div>Order ID: {order.id}</div>
          <div>Status: {order.status}</div>
          <div>Name: {order.customer_name}</div>
          <div>Phone: {order.phone}</div>
          <div>Address: {order.address}, {order.city}, {order.state} – {order.pincode}</div>
        </div>

        <div className="border-t border-b py-6 mb-6">
          {items?.map(i=>(
            <div key={i.id} className="flex justify-between mb-2">
              <span>{i.name} × {i.qty}</span>
              <span>₹ {i.price * i.qty}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>₹ {order.total}</span>
        </div>

        <a
          href={`/api/invoice/${order.id}`}
          target="_blank"
          className="block mt-10 text-center py-4 rounded-full bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)] uppercase tracking-widest text-xs shadow-xl"
        >
          Download Invoice
        </a>

      </div>
    </section>
  )
}
