import PavilionCard from "./PavilionCard"

const PAVILIONS = [
  {
    title: "Chana Papad",
    href: "/shop?cat=chana",
    image: "/pavilions/chana.jpg",
  },
  {
    title: "Moong Papad",
    href: "/shop?cat=moong",
    image: "/pavilions/moong.jpg",
  },
  {
    title: "Urad Papad",
    href: "/shop?cat=urad",
    image: "/pavilions/urad.jpg",
  },
  {
    title: " Garlic Papad",
    href: "/shop?cat=garlic",
    image: "/pavilions/gralic.jpg",
  },
]

export default function PavilionGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-2 md:grid-cols-4 gap-8">
      {PAVILIONS.map((p) => (
        <PavilionCard key={p.title} {...p} />
      ))}
    </section>
  )
}
