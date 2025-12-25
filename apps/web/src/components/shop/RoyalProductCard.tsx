import { useCart } from "@/store/cart";

export default function RoyalProductCard({ product }: { product: any }) {
  const add = useCart((s) => s.add);

  return (
    <a href={`/product/${product.slug}`} className="group block relative">
      {/* Gold halo */}
      <div
        className="absolute -inset-16 bg-[radial-gradient(circle,rgba(212,175,55,0.25),transparent_70%)]
                      opacity-40 sm:opacity-0 sm:group-hover:opacity-100 blur-3xl transition"
      />

      {/* Rangoli Engraving */}
      <div
        className="
        relative
        bg-[url('/border.png')] bg-contain bg-no-repeat bg-center
        p-8 sm:p-12
        rounded-[3.4rem]
        shadow-[0_60px_160px_rgba(0,0,0,0.35)]
      "
      >
        {/* White Marble Altar Slab */}
        <div
          className="
            bg-white
            rounded-[2.4rem]
            p-2 sm:p-4
            "
        >
          {/* Shrine */}
          <div className="relative aspect-[4/3] flex items-center justify-center pt-4 sm:pt-6 pb-2 sm:pb-3">
            <img
              src={product.product_images?.find((i) => i.is_primary)?.url}
              className="
                h-full w-auto
                max-w-[92%] sm:max-w-[94%]
                object-contain
                rounded-[1.4rem]
                drop-shadow-[0_30px_80px_rgba(0,0,0,0.5)]
                transition group-hover:scale-105
                "
            />
          </div>

          {/* Gold Spear Divider */}
          <div className="relative mx-auto w-[70%] h-[1px] bg-gold my-4 sm:my-6">
            <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
            <span className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rotate-45" />
          </div>

          {/* Placard */}
          <div className="text-center">
            <h3 className="font-royal text-[0.95rem] sm:text-xl tracking-wide text-royal mb-1 sm:mb-2">
              {product.name}
            </h3>

            <div className="text-[0.75rem] sm:text-sm mb-4 sm:mb-6">
              ₹ {product.price}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                add({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.product_images?.find((i) => i.is_primary)?.url,
                  qty: 1,
                });
              }}
              className="
                inline-flex items-center justify-center
                px-6 sm:px-10 py-2 sm:py-3
                rounded-full
                bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)]
                text-[#5C3A00] text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-semibold
                shadow-md transition hover:scale-105
                before:content-['']
                before:absolute before:inset-[-3px] sm:before:inset-[-4px]
                before:rounded-full  border-2 border-[#D4AF37]
              "
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </a>
  );
}
