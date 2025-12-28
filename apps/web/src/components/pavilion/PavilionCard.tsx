export default function PavilionCard({
  title,
  image,
  href,
}: {
  title: string
  image: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group relative block focus:outline-none"
    >

      {/* Royal Halo */}
      <div className="
        pointer-events-none
        absolute -inset-12
        bg-[radial-gradient(circle,rgba(212,175,55,0.45),transparent_72%)]
        opacity-30 group-hover:opacity-100
        blur-[120px] transition
      " />

      {/* Engraved Rangoli Frame */}
      <div className="
        relative
        bg-[conic-gradient(from_45deg,#F8E7A1,#CFAE57,#F8E7A1,#CFAE57,#F8E7A1)]
        p-[2.5px]
        rounded-[2.8rem]
        shadow-[0_60px_160px_rgba(0,0,0,0.55)]
      ">

        {/* Marble Tablet */}
        <div className="
          relative
          bg-white
          rounded-[2.5rem]
          overflow-hidden
        ">

          {/* Image Sanctum */}
          <div className="relative aspect-[4/5] overflow-hidden">

            <img
              src={image}
              alt={title}
              className="
                absolute inset-0
                w-full h-full object-cover
                scale-100 group-hover:scale-110
                transition-transform duration-[1400ms] ease-out
              "
            />

            {/* Silk Shadow Veil */}
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/45 via-black/15 to-transparent
            " />

            {/* Inner Gold Hairline */}
            <div className="
              absolute inset-3 rounded-[2rem]
              border border-[#E6C86E]/60
              pointer-events-none
            " />
          </div>

          {/* Royal Name Plaque */}
          <div className="
            relative
            px-5 py-6 sm:px-8 sm:py-7
            text-center
            bg-[linear-gradient(180deg,#FFF4D4,#F1D78B)]
            border-t border-[#E6C86E]
          ">
            <h3 className="
              font-royal
              text-[0.95rem] sm:text-[1.3rem]
              tracking-[0.25em]
              text-[#7A1A14]
              drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]
            ">
              {title}
            </h3>
          </div>

        </div>
      </div>
    </a>
  )
}
