"use client"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"
import RoyalPaymentShrine from "@/components/payment/RoyalPaymentShrine"

export default function PaymentPage() {
  const { orderId } = useParams()

  const { data: order } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () =>
      (await supabase.from("orders_v2").select("*").eq("id", orderId).single()).data
  })

  if (!order) return null

  return <RoyalPaymentShrine order={order} />
}
