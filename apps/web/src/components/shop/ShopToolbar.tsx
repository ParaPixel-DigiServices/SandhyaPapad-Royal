"use client"
import FilterPill from "./FilterPill"

export default function RoyalShopToolbar({ search,setSearch,sort,setSort,category,setCategory,categories }:{
  search:string,setSearch:(v:string)=>void,
  sort:string,setSort:(v:string)=>void,
  category:string,setCategory:(v:string)=>void,
  categories:any[]
}) {
  return (
    <div className="mb-14 space-y-8">

      <div className="bg-white border border-sandstone rounded-3xl p-5 shadow-lg flex items-center gap-4">
        <input
          className="flex-1 bg-transparent outline-none"
          placeholder="Search royal papads..."
          value={search}
          onChange={e=>setSearch(e.target.value)}
        />
        <select className="bg-transparent outline-none" value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="new">Newest</option>
          <option value="low">Price ↑</option>
          <option value="high">Price ↓</option>
        </select>
      </div>

      <div className="flex gap-3 overflow-x-auto">
        <FilterPill label="All" active={!category} onClick={()=>setCategory("")} />
        {categories.map(c=>(
          <FilterPill key={c.id} label={c.name} active={category===c.slug} onClick={()=>setCategory(c.slug)} />
        ))}
      </div>

    </div>
  )
}
