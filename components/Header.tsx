"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import LangSwitch from "./LangSwitch";

const linksBG = [
  { href: "/", label: "Начало" },
  { href: "/cars", label: "Автомобили" },
  { href: "/leasing", label: "Лизинг" },
  { href: "/services", label: "Услуги" },
  { href: "/faq", label: "ЧЗВ" },
  { href: "/contact", label: "Контакти" },
];

const linksEN = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/leasing", label: "Leasing" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const NAV_BG = "#231F20";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEN = pathname === "/en" || pathname.startsWith("/en/");
  const links = useMemo(() => (isEN ? linksEN : linksBG), [isEN]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function withLang(href: string) {
    if (!isEN) return href;
    if (href === "/") return "/en";
    return `/en${href}`;
  }

  function isActive(href: string) {
    const langHref = withLang(href);
    if (langHref === "/en") return pathname === "/en";
    return pathname === langHref;
  }

  return (
    <header
      className="sticky top-0 z-[100] w-full"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.00) 55%), " +
          `linear-gradient(90deg, ${NAV_BG} 0%, ${NAV_BG} 100%)`,
      }}
    >
      <div className="relative border-b border-white/10 shadow-[0_6px_20px_-12px_rgba(0,0,0,0.7)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-6 bg-gradient-to-b from-black/20 to-transparent" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="flex h-26 items-center justify-between gap-4">
            {/* Logo */}
            <Link href={withLang("/")} className="flex shrink-0 items-center">
              <div className="relative top-[4px] h-24 w-[220px] sm:w-[260px] md:w-[320px]">
                <Image
                  src="/logo.svg"
                  alt="Himera House"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Desktop navigation */}
            <ul className="hidden flex-1 items-center justify-end gap-8 whitespace-nowrap md:flex">
              {links.map((l) => {
                const href = withLang(l.href);
                const active = isActive(l.href);

                return (
                  <li key={l.href}>
                    <Link
                      href={href}
                      className={`relative text-sm font-medium transition-colors ${
                        active ? "text-white" : "text-white/75 hover:text-white"
                      }`}
                    >
                      {l.label}
                      {active && (
                        <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-white" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Desktop language switch */}
            <div className="hidden md:flex items-center pl-4 border-l border-white/20">
              <LangSwitch />
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="relative z-[110] inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="relative block h-5 w-6">
                <span
                  className={`absolute left-0 top-0 block h-[2px] w-6 bg-current transition-transform duration-200 ${
                    open ? "translate-y-[9px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-[18px] block h-[2px] w-6 bg-current transition-transform duration-200 ${
                    open ? "-translate-y-[9px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <button
          aria-label="Close menu"
          className={`fixed inset-x-0 bottom-0 top-20 z-[80] bg-black/45 backdrop-blur-sm transition-opacity ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        <div
          className={`fixed inset-x-0 top-20 z-[90] border-t border-white/10 shadow-lg transition-all duration-200 ${
            open
              ? "translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0"
          }`}
          style={{ backgroundColor: NAV_BG }}
        >
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-4">
            <ul className="flex flex-col gap-2">
              {links.map((l) => {
                const href = withLang(l.href);
                const active = isActive(l.href);

                return (
                  <li key={l.href}>
                    <Link
                      href={href}
                      className={`block w-full rounded-lg px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-white text-[#231F20]"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </li>
                );
              })}

              {/* Mobile language switch */}
              <li className="mt-3 border-t border-white/10 pt-3">
                <div className="flex items-center justify-between rounded-lg px-4 py-2">
                  <span className="text-sm text-white/70">Language</span>
                  <LangSwitch />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
