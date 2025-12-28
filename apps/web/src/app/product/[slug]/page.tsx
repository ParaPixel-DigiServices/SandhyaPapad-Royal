"use client";

import RoyalProductShrine from "@/components/product/RoyalProductShrine";
import RoyalProductInfo from "@/components/product/RoyalProductInfo";
import RoyalProductBackdrop from "@/components/product/RoyalProductBackdrop";
import { use } from "react";

const DEMO_PRODUCTS: any = {
  "chana-garlic": {
    id: "1",
    slug: "chana-garlic",
    name: "Chana Garlic Papad",
    description: "Hand-rolled royal chana papad infused with garlic & Rajasthani spices.",
    price: 199,
    product_images: [{ url: "/pavilions/gralic.jpg", is_primary: true }],
  },
  "chana-masala": {
    id: "2",
    slug: "chana-masala",
    name: "Chana Masala Papad",
    description: "Golden crisp papads roasted with palace spice blend.",
    price: 189,
    product_images: [{ url: "/pavilions/chana.jpg", is_primary: true }],
  },
  "moong": {
    id: "3",
    slug: "moong",
    name: "Moong Dal Papad",
    description: "Light and crunchy moong dal papads sun-dried in royal courtyards.",
    price: 179,
    product_images: [{ url: "/pavilions/moong.jpg", is_primary: true }],
  },
  "urad": {
    id: "4",
    slug: "urad",
    name: "Urad Punjabi Papad",
    description: "Thick, bold urad papads — a heritage Punjabi recipe.",
    price: 209,
    product_images: [{ url: "/pavilions/urad.jpg", is_primary: true }],
  },
};

export default function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);             // ✅ unwrap promise
  const product = DEMO_PRODUCTS[slug];      // ✅ use slug, not params.slug

  if (!product) return null;

  return (
    <section className="relative overflow-hidden">
      <RoyalProductBackdrop />

      <div className="relative max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 lg:pt-36 pb-32 sm:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-6">
            <RoyalProductShrine product={product} />
          </div>
          <div className="lg:col-span-6">
            <RoyalProductInfo product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
