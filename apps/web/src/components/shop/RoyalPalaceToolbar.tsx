"use client"
import PalaceCategoryTile from "./PalaceCategoryTile"
import RoyalSearchPavilion from "./RoyalSearchPavilion"
import RoyalSortSelector from "./RoyalSortSelector"

export default function RoyalShopPalaceToolbar({ categories,category,setCategory,search,setSearch,sort,setSort }:{
  categories:any[]
  category:string
  setCategory:(v:string)=>void
  search:string
  setSearch:(v:string)=>void
  sort:string
  setSort:(v:string)=>void
}) {
  return (
    <div className="mb-20 space-y-12">

      {/* Search + Sort */}
      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 sm:gap-6 items-center">
        <RoyalSearchPavilion value={search} onChange={setSearch}/>
        <RoyalSortSelector value={sort} onChange={setSort}/>
      </div>
    </div>
  )
}
