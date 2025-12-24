"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-parchment">
      <div className="absolute inset-0 opacity-10 bg-[url('/palace.svg')] bg-center bg-no-repeat bg-contain" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center"
      >
        <img src="/hero-pack.png" className="w-48 mb-6 drop-shadow-xl" />
        <h1 className="text-3xl sm:text-5xl text-royal mb-3">Jodhpur’s Royal Papad Legacy</h1>
        <p className="mb-6">Handcrafted • Sun Dried • No Preservatives</p>
        <a href="/shop" className="bg-gold px-6 py-3">Shop Papads</a>
      </motion.div>
    </div>
  );
}
