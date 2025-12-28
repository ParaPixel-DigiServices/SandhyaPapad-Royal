"use client";
import { useState } from "react";
import RoyalProductCard from "@/components/shop/RoyalProductCard";
import RoyalShopPalaceToolbar from "@/components/shop/RoyalPalaceToolbar";
import RoyalShopBackdrop from "@/components/shop/RoyalShopBackDrop";

const CATEGORIES = [
  { id: "all", name: "All", slug: "" },
  { id: "chana", name: "Chana", slug: "chana" },
  { id: "moong", name: "Moong", slug: "moong" },
  { id: "urad", name: "Urad", slug: "urad" },
];

const PRODUCTS = [
  {
    id: "1",
    name: "Chana Garlic Papad",
    slug: "chana-garlic",
    price: 199,
    category_slug: "chana",
    product_images: [{ url: "/pavilions/gralic.jpg", is_primary: true }],
  },
  {
    id: "2",
    name: "Chana Masala Papad",
    slug: "chana-masala",
    price: 189,
    category_slug: "chana",
    product_images: [{ url: "/pavilions/chana.jpg", is_primary: true }],
  },
  {
    id: "3",
    name: "Moong Dal Papad",
    slug: "moong",
    price: 179,
    category_slug: "moong",
    product_images: [{ url: "/pavilions/moong.jpg", is_primary: true }],
  },
  {
    id: "4",
    name: "Urad Punjabi Papad",
    slug: "urad",
    price: 209,
    category_slug: "urad",
    product_images: [{ url: "/pavilions/urad.jpg", is_primary: true }],
  },
];

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("new");
  const [category, setCategory] = useState("");

  let filtered = PRODUCTS.filter(
    p =>
      (!category || p.category_slug === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "high") filtered.sort((a, b) => b.price - a.price);

  return (
    <section className="relative overflow-hidden">
      <RoyalShopBackdrop />

      <div className="relative max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 lg:pt-32 pb-28 sm:pb-32 lg:pb-36">

        <RoyalShopPalaceToolbar
          categories={CATEGORIES}
          category={category}
          setCategory={setCategory}
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 sm:gap-x-12 xl:gap-x-16 gap-y-20 sm:gap-y-24 xl:gap-y-32">
          {filtered.map(p => (
            <RoyalProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
