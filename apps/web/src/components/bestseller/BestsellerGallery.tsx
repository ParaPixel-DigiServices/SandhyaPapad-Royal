"use client";
import BestsellerCard from "./BestsellerCard";

const BESTSELLERS = [
  {
    id: "1",
    name: "Chana Garlic Papad",
    slug: "chana-garlic",
    price: 199,
    product_images: [{ url: "/pavilions/gralic.jpg", is_primary: true }],
  },
  {
    id: "2",
    name: "Chana Masala Papad",
    slug: "chana-masala",
    price: 189,
    product_images: [{ url: "/pavilions/chana.jpg", is_primary: true }],
  },
  {
    id: "3",
    name: "Moong Dal Papad",
    slug: "moong",
    price: 179,
    product_images: [{ url: "/pavilions/moong.jpg", is_primary: true }],
  },
  {
    id: "4",
    name: "Urad Punjabi Papad",
    slug: "urad",
    price: 209,
    product_images: [{ url: "/pavilions/urad.jpg", is_primary: true }],
  },
];

export default function BestsellerGallery() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <div className="flex justify-between items-end mb-10">
        <h2 className="font-royal text-3xl text-royal">Royal Bestsellers</h2>
        <a href="/shop" className="text-gold text-sm">
          View All
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {BESTSELLERS.map((p) => (
          <BestsellerCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
