export default function FilterPill({ label, active, onClick }:{ label:string, active:boolean, onClick:()=>void }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full border text-xs uppercase tracking-widest transition
      ${active ? "bg-gold text-white border-gold" : "border-sandstone text-royal hover:bg-gold hover:text-white"}`}
    >
      {label}
    </button>
  )
}
