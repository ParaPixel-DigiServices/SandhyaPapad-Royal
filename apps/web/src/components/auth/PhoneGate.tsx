"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"

export default function PhoneGate() {
  const [show,setShow] = useState(false)
  const [phone,setPhone] = useState("")
  const [userId,setUserId] = useState<string | null>(null)

  useEffect(()=>{
    supabase.auth.getUser().then(async({data})=>{
      const user = data.user
      if(!user) return

      // Only Google users need forced phone
      const provider = user.app_metadata?.provider
      if(provider !== "google") return

      const { data:profile } = await supabase
        .from("profiles")
        .select("phone")
        .eq("id",user.id)
        .single()

      if(profile && !profile.phone){
        setUserId(user.id)
        setShow(true)
      }
    })
  },[])

  async function save() {
    if(!userId || !phone) return
    await supabase.from("profiles").update({ phone }).eq("id",userId)
    setShow(false)
  }

  if(!show) return null

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-3xl p-10 max-w-sm w-full text-center">
        <h2 className="font-royal text-2xl mb-4">Royal Verification</h2>
        <p className="text-sm mb-6">Please enter your phone number to continue.</p>
        <input
          value={phone}
          onChange={e=>setPhone(e.target.value)}
          className="border p-4 w-full rounded-xl mb-4"
          placeholder="Phone Number"
        />
        <button
          onClick={save}
          className="w-full py-4 rounded-full bg-[#D4AF37] text-[#5C3A00] uppercase tracking-widest text-xs shadow-xl">
          Verify & Continue
        </button>
      </div>
    </div>
  )
}
