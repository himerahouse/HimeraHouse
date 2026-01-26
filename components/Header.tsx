"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Начало" },
  { href: "/cars", label: "Автомобили" },
  { href: "/leasing", label: "Лизинг" },
  { href: "/services", label: "Услуги" },
  { href: "/faq", label: "ЧЗВ" },
  { href: "/contact", label: "Контакти" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex h-22 items-center justify-between">
          {/* Logo */}
<Link href="/" className="flex items-center">
  <div className="relative h-20 w-[400px]">
    <Image
      src="/logo.svg"
      alt="Himera House"
      fill
      priority
      className="object-contain"
    />
  </div>
</Link>



          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`relative text-sm font-medium transition-colors ${
                      active
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {l.label}
                    {active && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gray-900" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-6 bg-current transition-transform ${
                  open ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[9px] block h-[2px] w-6 bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[18px] block h-[2px] w-6 bg-current transition-transform ${
                  open ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Backdrop */}
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative z-50 border-t border-gray-200 bg-white md:hidden">
            <div className="mx-auto max-w-7xl px-6 py-4">
              <ul className="flex flex-col gap-1">
                {links.map((l) => {
                  const active = pathname === l.href;
                  return (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className={`block rounded-md px-3 py-2 text-sm font-medium transition ${
                          active
                            ? "bg-gray-900 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
