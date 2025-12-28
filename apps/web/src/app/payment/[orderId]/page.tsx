"use client"
import RoyalPaymentShrine from "@/components/payment/RoyalPaymentShrine"
import { useCart } from "@/store/cart"
import { useMemo } from "react"

export default function PaymentPage() {
  const { items } = useCart()

  const order = useMemo(() => ({
    id: "ROYAL-DEMO-001",
    total: items.reduce((s,i)=>s + i.price * i.qty, 0),
    status: "pending"
  }), [items])

  return <RoyalPaymentShrine order={order} />
}
