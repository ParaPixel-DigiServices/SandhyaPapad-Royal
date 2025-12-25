"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AccountPage() {
  const [profile, setProfile] = useState<any>(null);
  const [orders, setOrders] = useState<any[]>([]);
  const [avatar, setAvatar] = useState<string>("");

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;

      setAvatar(data.user.user_metadata?.avatar_url || "/avatar.png");

      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

      setProfile(profile);

      const { data: orders } = await supabase
        .from("orders_v2")
        .select("id,total,status,created_at")
        .eq("user_id", data.user.id)
        .order("created_at", { ascending: false });

      setOrders(orders || []);
    });
  }, []);

  if (!profile) return null;

  return (
    <section className="min-h-screen bg-[#F6EEDC] pt-28 pb-20 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* PROFILE CREST */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row gap-10 items-center">
          <img
            src={avatar}
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-gold object-cover"
          />

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await supabase
                .from("profiles")
                .update({
                  full_name: profile.full_name,
                  phone: profile.phone,
                  email: profile.email,
                })
                .eq("id", profile.id);
              alert("Royal Profile Updated");
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full"
          >
            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">
                Full Name
              </label>
              <input
                className="w-full border border-sandstone rounded-xl p-4"
                value={profile.full_name || ""}
                onChange={(e) =>
                  setProfile({ ...profile, full_name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest mb-2">
                Phone
              </label>
              <input
                className="w-full border border-sandstone rounded-xl p-4"
                value={profile.phone || ""}
                onChange={(e) =>
                  setProfile({ ...profile, phone: e.target.value })
                }
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                className="w-full border border-sandstone rounded-xl p-4"
                value={profile.email || ""}
                onChange={(e) =>
                  setProfile({ ...profile, email: e.target.value })
                }
              />
            </div>

            <button
              className="sm:col-span-2 mt-4 py-4 rounded-full
              bg-[radial-gradient(circle_at_top,#FFE39B,#D4AF37)]
              text-[#5C3A00] uppercase tracking-[0.35em] text-xs shadow-xl hover:scale-105 transition"
            >
              Save Profile
            </button>
          </form>

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = "/";
            }}
            className="
                mt-6 lg:mt-0 px-10 py-3 rounded-full
                bg-[#F32013]
                text-white
                uppercase tracking-[0.35em] text-xs
                shadow-xl hover:scale-105 transition
            "
          >
            Logout
          </button>
        </div>

        {/* ORDERS */}
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 shadow-2xl">
          <h2 className="font-royal text-3xl text-royal mb-8">Royal Orders</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {orders.map((o) => (
             <a href={`/order/${o.id}`} key={o.id} className="block rounded-3xl border border-gold/40 p-6 bg-[#FFF9ED] shadow-inner hover:scale-[1.02] transition">

                <div className="text-xs uppercase tracking-widest text-gold mb-3">
                  Order #{o.id.slice(0, 6)}
                </div>
                <div className="flex justify-between mb-2">
                  <span>Total</span>
                  <span>₹ {o.total}</span>
                </div>
                <div className="flex justify-between">
                  <span>Status</span>
                  <span>{o.status}</span>
                </div>
              </a>
            ))}
            {orders.length === 0 && <p>No orders yet.</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
