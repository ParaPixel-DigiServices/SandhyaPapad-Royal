import BaseLayer from "./BaseLayer"
import PalaceSilhouette from "./PalaceSilhouette"
import SunHalo from "./SunHalo"
import MandalaMesh from "./MandalaMesh"
import OrnamentBorder from "./OrnamentBorder"
import HeroFrame from "./HeroFrame"

export default function RoyalHero() {
  return (
    <section className="relative overflow-hidden">
      <BaseLayer />
      <MandalaMesh />
      <PalaceSilhouette />
      <SunHalo />
      <HeroFrame />
    </section>
  )
}
