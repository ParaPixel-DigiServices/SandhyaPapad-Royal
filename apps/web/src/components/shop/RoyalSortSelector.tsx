export default function RoyalSortSelector({ value,onChange }:{ value:string,onChange:(v:string)=>void }) {
  return (
    <select
      value={value}
      onChange={e=>onChange(e.target.value)}
      className="
        w-full sm:w-auto
        bg-white/80 backdrop-blur-xl
        border border-[#D4AF37]
        rounded-full
        px-6 py-4 sm:px-7 sm:py-5
        text-[0.7rem] sm:text-xs
        uppercase tracking-widest
        shadow-lg
      "
    >
      <option value="new">Newest</option>
      <option value="low">Low → High</option>
      <option value="high">High → Low</option>
    </select>
  )
}
