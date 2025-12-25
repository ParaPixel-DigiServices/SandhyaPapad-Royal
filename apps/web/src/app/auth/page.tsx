"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function AuthPage() {
  const [mode,setMode]=useState<"login"|"signup">("login")
  const [name,setName]=useState("")
  const [phone,setPhone]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function handleAuth() {
    if(mode==="signup") {
      const { data } = await supabase.auth.signUp({ email,password })
      if(data.user) {
        await supabase.from("profiles").insert({
          id:data.user.id,
          name, phone, email
        })
      }
    } else {
      await supabase.auth.signInWithPassword({ email,password })
    }
  }

  async function google() {
    await supabase.auth.signInWithOAuth({ provider:"google" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F6EEDC]">
      <div className="bg-white rounded-[3rem] shadow-2xl p-12 max-w-sm w-full text-center">

        <h1 className="font-royal text-3xl mb-6 text-royal">Authentication</h1>

        {mode==="signup" && (
          <>
            <input className="border border-sandstone p-4 w-full rounded-xl mb-4"
              placeholder="Full Name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="border border-sandstone p-4 w-full rounded-xl mb-4"
              placeholder="Phone Number" value={phone} onChange={e=>setPhone(e.target.value)} />
          </>
        )}

        <input className="border border-sandstone p-4 w-full rounded-xl mb-4"
          placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />

        <input type="password" className="border border-sandstone p-4 w-full rounded-xl mb-4"
          placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />

        <button onClick={handleAuth}
          className="w-full py-4 rounded-full bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)]
          text-[#5C3A00] uppercase tracking-widest text-xs shadow-xl mb-4">
          {mode==="login" ? "Enter" : "Create Account"}
        </button>

        <button onClick={google}
          className="w-full py-4 rounded-full border border-gold text-gold uppercase tracking-widest text-xs mb-4">
          Continue with Google
        </button>

        <button onClick={()=>setMode(mode==="login"?"signup":"login")}
          className="text-xs underline">
          {mode==="login" ? "Create Account" : "Back to Login"}
        </button>
      </div>
    </section>
  )
}
