export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">

      {/* Soft Royal Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_65%)]" />

      <div className="
        relative max-w-6xl mx-auto
        px-6 sm:px-10 lg:px-16
        pt-28 sm:pt-36
        pb-32 sm:pb-40
      ">

        {/* Crown Heading */}
        <div className="text-center mb-24">
          <h1 className="font-royal text-[3rem] sm:text-[4rem] text-royal mb-4">
            The Legacy of Sandhya
          </h1>
          <p className="uppercase tracking-[0.4em] text-xs text-gold">
            Where Tradition Meets Royal Taste
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">

          <div className="space-y-8 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
              vehicula lectus, sed sagittis lorem consequat non. Vestibulum ante ipsum
              primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            <p>
              Curabitur imperdiet, lorem id imperdiet convallis, arcu velit fermentum
              nisl, sit amet pretium erat justo nec lorem. Nulla facilisi. Proin vitae
              lorem sit amet sapien facilisis cursus.
            </p>
            <p>
              Praesent tristique, magna sit amet pulvinar placerat, ipsum arcu mattis
              velit, nec tincidunt neque nulla in sapien. Morbi dignissim risus nec
              metus accumsan dignissim.
            </p>
          </div>

          {/* Royal Plaque */}
          <div className="
            bg-white rounded-[2.8rem] p-10
            shadow-[0_40px_120px_rgba(0,0,0,0.25)]
            border border-gold/40
          ">
            <h3 className="font-royal text-2xl text-royal mb-6">Our Promise</h3>
            <ul className="space-y-4 text-sm leading-relaxed">
              <li>✦ Lorem ipsum dolor sit amet consectetur adipiscing elit</li>
              <li>✦ Integer nec odio praesent libero sed cursus ante dapibus</li>
              <li>✦ Sed nisi nulla quis sem at nibh elementum imperdiet</li>
              <li>✦ Duis sagittis ipsum praesent mauris</li>
              <li>✦ Fusce nec tellus sed augue semper porta</li>
            </ul>
          </div>
        </div>

        {/* Royal Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {[
            "Pure Ingredients",
            "Ancient Recipes",
            "Handcrafted Care",
            "Royal Standards"
          ].map((v) => (
            <div key={v} className="
              bg-white rounded-[2rem] p-8 text-center
              shadow-[0_30px_80px_rgba(0,0,0,0.22)]
              border border-gold/40
            ">
              <div className="h-1 w-12 bg-gold mx-auto mb-4" />
              <h4 className="font-royal text-xl text-royal mb-2">{v}</h4>
              <p className="text-sm opacity-80">
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.
              </p>
            </div>
          ))}
        </div>

        {/* Royal Seal */}
        <div className="text-center">
          <div className="inline-block px-16 py-6 rounded-full bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)]
            uppercase tracking-[0.45em] text-xs font-semibold text-[#5C3A00] shadow-xl">
            Preserving Royal Taste Since Generations
          </div>
        </div>

      </div>
    </section>
  )
}
