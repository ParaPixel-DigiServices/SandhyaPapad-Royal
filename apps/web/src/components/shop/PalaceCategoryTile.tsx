export default function PalaceCategoryTile({ name, image, active, onClick }:{
  name:string
  image?:string
  active:boolean
  onClick:()=>void
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative flex-shrink-0
        w-24 h-28 sm:w-32 sm:h-40
        rounded-2xl sm:rounded-3xl
        overflow-hidden border-2 transition
        ${active
          ? "border-[#7B1113] shadow-xl"
          : "border-[#D4AF37] opacity-80 hover:opacity-100"}
      `}
    >

      {image ? (
        <img src={image} className="absolute inset-0 w-full h-full object-cover"/>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#fff8e6,#f0e3c2)]"/>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>

      <span className="
        absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2
        font-royal text-white
        text-[0.6rem] sm:text-sm
        tracking-wide text-center
        px-2
      ">
        {name}
      </span>
    </button>
  )
}
