"use client";
import { useState } from "react";

const DEMO_USER = {
  full_name: "Amogha Rao",
  phone: "+91 98765 43210",
  email: "amogh@parapixel.in.net",
  avatar: "/avatar.png"
};

const DEMO_ORDERS = [
  {
    id: "ORD10291",
    total: 798,
    status: "confirmed"
  },
  {
    id: "ORD10212",
    total: 378,
    status: "pending"
  },
  {
    id: "ORD10178",
    total: 1199,
    status: "delivered"
  }
];

export default function AccountPage() {
  const [profile, setProfile] = useState(DEMO_USER);

  return (
    <section className="min-h-screen bg-[#F6EEDC] pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-14">

        {/* PROFILE */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 items-center">

          <img
            src={profile.avatar}
            onError={(e) => (e.currentTarget.src = "/avatar.png")}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-gold object-cover"
          />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Royal Profile Updated");
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Full Name</label>
              <input className="w-full border rounded-xl p-4"
                value={profile.full_name}
                onChange={(e)=>setProfile({...profile, full_name:e.target.value})}/>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">Phone</label>
              <input className="w-full border rounded-xl p-4"
                value={profile.phone}
                onChange={(e)=>setProfile({...profile, phone:e.target.value})}/>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest mb-2">Email</label>
              <input className="w-full border rounded-xl p-4"
                value={profile.email}
                onChange={(e)=>setProfile({...profile, email:e.target.value})}/>
            </div>

            <button className="sm:col-span-2 mt-4 py-4 rounded-full bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)]
              uppercase tracking-[0.35em] text-xs shadow-xl hover:scale-105 transition">
              Save Profile
            </button>
          </form>

          <button
            onClick={() => alert("Logout")}
            className="mt-6 lg:mt-0 px-10 py-3 rounded-full bg-[#F32013] text-white uppercase tracking-[0.35em] text-xs shadow-xl hover:scale-105 transition">
            Logout
          </button>
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl">
          <h2 className="font-royal text-3xl text-royal mb-8">Royal Orders</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEMO_ORDERS.map(o=>(
              <a key={o.id} href="#" className="block rounded-3xl border p-6 bg-[#FFF9ED] shadow-inner hover:scale-[1.02] transition">
                <div className="text-xs uppercase tracking-widest text-gold mb-3">Order #{o.id}</div>
                <div className="flex justify-between mb-2"><span>Total</span><span>₹ {o.total}</span></div>
                <div className="flex justify-between"><span>Status</span><span className="capitalize">{o.status}</span></div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
