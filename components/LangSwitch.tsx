"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LangSwitch() {
  const pathname = usePathname();

  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const target = isEN
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname}`;

  return (
    <Link
      href={target}
      aria-label={isEN ? "Switch to Bulgarian" : "Switch to English"}
      title={isEN ? "BG" : "EN"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg leading-none text-white shadow-sm transition hover:bg-white/20 hover:shadow focus:outline-none focus:ring-2 focus:ring-white/30"
    >
      <span className="leading-none">{isEN ? "bg" : "en"}</span>
    </Link>
  );
}
