"use client"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"
import RoyalProductForm from "./RoyalProductForm"
import RoyalProductTable from "./RoyalProductTable"

export default function RoyalProductForge() {
  const { data: products, refetch } = useQuery({
    queryKey: ["admin-products"],
    queryFn: async () => (await supabase.from("products").select("*")).data
  })

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <h1 className="font-royal text-3xl mb-10">Product Forge</h1>
      <RoyalProductForm onCreated={refetch} />
      <RoyalProductTable products={products || []} onChange={refetch} />
    </div>
  )
}
