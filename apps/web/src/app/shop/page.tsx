"use client"
import { useQuery } from "@tanstack/react-query"
import { supabase } from "@/lib/supabase"
import { useState } from "react"
import RoyalProductCard from "@/components/shop/RoyalProductCard"
import RoyalShopPalaceToolbar from "@/components/shop/RoyalPalaceToolbar"
import RoyalShopBackdrop from "@/components/shop/RoyalShopBackDrop"

export default function ShopPage() {
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("new")
  const [category, setCategory] = useState("")

  const { data: categories } = useQuery({
    queryKey: ["cats"],
    queryFn: async () => (await supabase.from("categories").select("*")).data
  })

  const { data: products } = useQuery({
    queryKey: ["shop", search, sort, category],
    queryFn: async () => {
      let q = supabase.from("products").select("*,product_images(url,is_primary)")
      if (search) q = q.ilike("name", `%${search}%`)
      if (category) q = q.eq("category_slug", category)
      if (sort === "low") q = q.order("price", { ascending: true })
      if (sort === "high") q = q.order("price", { ascending: false })
      return (await q).data
    }
  })

  return (
    <section className="relative overflow-hidden">
      <RoyalShopBackdrop />

      <div className="
        relative
        max-w-[92rem] mx-auto
        px-4 sm:px-6 lg:px-12
        pt-24 sm:pt-28 lg:pt-32
        pb-28 sm:pb-32 lg:pb-36
      ">

        {categories && (
          <RoyalShopPalaceToolbar
            categories={categories}
            category={category} setCategory={setCategory}
            search={search} setSearch={setSearch}
            sort={sort} setSort={setSort}
          />
        )}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-x-10 sm:gap-x-12 xl:gap-x-16
          gap-y-20 sm:gap-y-24 xl:gap-y-32
        ">
          {products?.map(p => (
            <RoyalProductCard key={p.id} product={p} />
          ))}
        </div>

      </div>
    </section>
  )
}
