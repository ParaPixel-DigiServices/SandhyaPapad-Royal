import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
      ignoreBuildErrors: true
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "anybjfpizeaqxysdufco.supabase.co" },
    ],
  },
};

export default nextConfig;
