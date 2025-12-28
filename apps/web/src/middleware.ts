import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: Request) {
  const res = NextResponse.next();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.headers.get("cookie")?.match(new RegExp(`${name}=([^;]+)`))?.[1];
        },
        set() {},
        remove() {}
      }
    }
  );

  await supabase.auth.getSession();
  return res;
}
