"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "New System Quote", href: "#new-system-quote" },
  {
    name: "HVAC Services",
    href: "#hvac-services",
    children: [
      { name: "A/C Rejuvenation", href: "#ac-rejuvenation" },
      { name: "Repair & Tune-Up", href: "#repair-replace" },
      { name: "Repair or Replace", href: "#repair-replace" },
    ],
  },
  {
    name: "Other Services",
    href: "#other-services",
    children: [
      { name: "Water Quality Solutions", href: "#water-quality" },
      { name: "Indoor Air Quality", href: "#indoor-air-quality" },
    ],
  },
  { name: "How We Work", href: "#how-we-work" },
  { name: "About Us", href: "#about-us" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const isProtected = pathname.startsWith("/dashboard");
  if (isProtected) {
    return <></>;
  }
  return (
    <header className="sticky top-0 z-50 bg-[var(--primary)] border-b border-[var(--primary-light)]/80">
      <div className=" max-w-360 mx-auto flex items-center justify-between gap-8 py-4">
        <Link
          href="#new-system-quote"
          className="inline-flex items-center gap-3"
        >
          <Image src="/images/logo.png" alt="Logo" width={70} height={40} />
        </Link>

        <nav className="hidden items-center gap-1 uppercase text-sm font-semibold text-white md:flex">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded-lg transition hover:bg-white/10"
              >
                {item.name}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden pt-0 group-hover:block">
                  <div className="rounded-lg bg-[var(--primary-light)] border border-white/10 shadow-lg py-2 min-w-56">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-xs whitespace-nowrap hover:bg-white/10 transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+12142527320"
            className="text-sm font-semibold text-white"
          >
            (214) 252-7320
          </a>
          <a
            href="#new-system-quote"
            className="rounded-full bg-[var(--secondary)] px-4 py-2 text-sm font-semibold uppercase text-white transition hover:bg-[#f86a32]"
          >
            Schedule Service
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[var(--primary)]/95 px-4 pb-6 pt-4 text-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  type="button"
                  onClick={() =>
                    setDropdownOpen(
                      dropdownOpen === item.name ? null : item.name,
                    )
                  }
                  className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold uppercase transition hover:bg-white/10"
                >
                  {item.name}
                  {item.children && (
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${dropdownOpen === item.name ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
                {item.children && dropdownOpen === item.name && (
                  <div className="flex flex-col gap-1 bg-white/5 rounded-xl mt-1 ml-4 p-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-white/10"
                        onClick={() => {
                          setMenuOpen(false);
                          setDropdownOpen(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="tel:+12142527320"
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold transition hover:bg-white/10"
            >
              (214) 252-7320
            </a>
            <a
              href="#new-system-quote"
              className="rounded-2xl bg-[var(--secondary)] px-4 py-3 text-center text-sm font-semibold uppercase text-white transition hover:bg-[#f86a32]"
              onClick={() => setMenuOpen(false)}
            >
              Schedule Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
