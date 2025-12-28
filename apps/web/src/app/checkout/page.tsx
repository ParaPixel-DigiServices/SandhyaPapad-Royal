"use client"
import { useCart } from "@/store/cart"
import { useRouter } from "next/navigation"
import RoyalCheckoutForm from "@/components/checkout/RoyalCheckoutForm"
import RoyalCheckoutSummary from "@/components/checkout/RoyalCheckoutSummary"
import RoyalCheckoutBackdrop from "@/components/checkout/RoyalCheckoutBackdrop"

export default function CheckoutPage() {
  const items = useCart(s=>s.items)
  const router = useRouter()

  if(items.length === 0){
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-royal">
        Your Royal Cart is Empty
      </div>
    )
  }

  return (
    <section className="relative overflow-hidden">
      <RoyalCheckoutBackdrop />

      <div className="
        relative max-w-[92rem] mx-auto
        px-4 sm:px-6 lg:px-12
        pt-24 sm:pt-32 lg:pt-36
        pb-32 sm:pb-40
      ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-7">
            <RoyalCheckoutForm
              onDemoSubmit={()=>{
                const fakeId = "DEMO-" + Math.random().toString(36).slice(2,8).toUpperCase()
                router.push(`/payment/${fakeId}`)
              }}
            />
          </div>
          <div className="lg:col-span-5">
            <RoyalCheckoutSummary />
          </div>
        </div>
      </div>
    </section>
  )
}
