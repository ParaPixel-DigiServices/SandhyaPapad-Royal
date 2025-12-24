export default function HeroFrame() {
  return (
    <section className="relative max-w-[1700px] mx-auto px-6 pt-40 pb-36 grid grid-cols-1 lg:grid-cols-12 gap-20 items-center z-10">
      <div className="lg:col-span-5 flex justify-center relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_70%)] rounded-full blur-3xl" />
        <img
          src="/hero-pack.png"
          className="relative w-[360px] sm:w-[420px] xl:w-[480px] drop-shadow-[0_60px_140px_rgba(0,0,0,0.35)]"
        />
      </div>

      <div className="lg:col-span-7">
        <div className="flex items-center gap-6 mb-14">
          <div className="h-px w-24 bg-gold"></div>
          <span className="uppercase tracking-[0.45em] text-gold text-xs">
            Royal Heritage of Rajasthan
          </span>
        </div>

        <h1
          className="font-royal text-[4.2rem] sm:text-[5.8rem] xl:text-[7.5rem] leading-[0.92] text-[#7A1A14]
          drop-shadow-[0_5px_0_rgba(212,175,55,0.65)] mb-14"
        >
          Sandhya
          <br />
          Papad
        </h1>

        <h2 className="font-royal text-[1.8rem] sm:text-[2.6rem] tracking-widest text-[#9E2A1F] mb-10">
          Royal Kitchens of Jodhpur
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed mb-16">
          Crafted using ancestral Rajasthani culinary techniques, sun-dried in
          palace courtyards and packed fresh to preserve purity, tradition and
          royal taste.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="/shop"
            className="px-16 py-5 border-2 border-gold uppercase tracking-[0.35em] text-sm hover:bg-[#7A1A14] hover:text-white transition"
          >
            Enter Royal Bazaar
          </a>
          <a
            href="/about"
            className="px-16 py-5 border border-[#7A1A14] uppercase tracking-[0.35em] text-sm hover:bg-[#7A1A14] hover:text-white transition"
          >
            Our Heritage
          </a>
        </div>
      </div>
    </section>
  );
}
