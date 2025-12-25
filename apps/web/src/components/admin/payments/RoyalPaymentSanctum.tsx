"use client"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"
import RoyalPaymentCard from "./RoyalPaymentCard"

export default function RoyalPaymentSanctum() {
  const { data:payments, refetch } = useQuery({
    queryKey:["admin-payments"],
    queryFn: async()=> (await supabase.from("payments_v2")
      .select("*, orders_v2(*)")
      .order("created_at",{ascending:false})).data
  })

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="font-royal text-3xl mb-10">Payment Sanctum</h1>
      <div className="space-y-6">
        {payments?.map(p=>(
          <RoyalPaymentCard key={p.id} payment={p} onChange={refetch}/>
        ))}
      </div>
    </div>
  )
}
