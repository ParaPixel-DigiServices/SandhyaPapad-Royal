export default function RoyalSearchPavilion({ value,onChange }:{ value:string,onChange:(v:string)=>void }) {
  return (
    <div className="
      w-full
      bg-white/80 backdrop-blur-xl
      rounded-full
      border border-[#D4AF37]
      px-5 py-4 sm:px-7 sm:py-5
      shadow-lg
    ">
      <input
        className="
          w-full bg-transparent outline-none
          text-[0.9rem] sm:text-base
          placeholder:text-royal/60
        "
        placeholder="Search royal papads..."
        value={value}
        onChange={e=>onChange(e.target.value)}
      />
    </div>
  )
}
