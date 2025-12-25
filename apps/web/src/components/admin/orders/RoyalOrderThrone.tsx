"use client"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"
import RoyalOrderCard from "./RoyalOrderCard"

export default function RoyalOrderThrone() {
  const { data:orders, refetch } = useQuery({
    queryKey:["admin-orders"],
    queryFn: async()=> (await supabase.from("orders_v2").select("*").order("created_at",{ascending:false})).data
  })

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="font-royal text-3xl mb-10">Order Throne</h1>
      <div className="space-y-6">
        {orders?.map(o=>(
          <RoyalOrderCard key={o.id} order={o} onChange={refetch}/>
        ))}
      </div>
    </div>
  )
}
