"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function RoyalProductForm({ onCreated }:{ onCreated:()=>void }) {
  const [form,setForm] = useState({ name:"", price:"", description:"" })
  const [file,setFile] = useState<File | null>(null)

  const submit = async()=>{
    if(!file) return

    const path = `${Date.now()}-${file.name}`
    await supabase.storage.from("product-images").upload(path,file)

    const { data:img } = supabase.storage.from("product-images").getPublicUrl(path)

    await supabase.from("products").insert({
      name:form.name,
      slug:form.name.toLowerCase().replace(/ /g,"-"),
      price:form.price,
      description:form.description,
      image_url:img.publicUrl
    })

    setForm({name:"",price:"",description:""})
    onCreated()
  }

  return (
    <div className="bg-white/80 rounded-2xl p-6 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <input placeholder="Name" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))}/>
        <input placeholder="Price" value={form.price} onChange={e=>setForm(f=>({...f,price:e.target.value}))}/>
        <input placeholder="Description" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))}/>
        <input type="file" onChange={e=>setFile(e.target.files?.[0] || null)}/>
      </div>
      <button onClick={submit} className="mt-4 px-6 py-3 rounded-full bg-gold">Forge Product</button>
    </div>
  )
}
