"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isProtected = pathname.startsWith("/dashboard");
  if (isProtected) {
    return <></>;
  }
  return (
    <footer className="bg-[#253147] text-[#858C95]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr_1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#DE7B42]">
                Fast. Fair. Fixed.
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
                DFW’s family-owned HVAC and plumbing company.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#B1B7C0]">
              Based on Grapevine, TX, serving the Metroplex.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3C4A67] bg-white/5 px-4 py-2 text-sm text-white">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#DE7B42] text-[#253147]">
                  🏠
                </span>
                Family-owned
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3C4A67] bg-white/5 px-4 py-2 text-sm text-[#DE7B42]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#DE7B42]" />
                Not PE-backed
              </span>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#DE7B42]">
              Services
            </p>
            <div className="mt-6 grid gap-3 text-sm leading-7">
              <Link href="/" className="transition hover:text-white">
                A/C Rejuvenation
              </Link>
              <Link href="/" className="transition hover:text-white">
                Repair & Tune-Up
              </Link>
              <Link href="/" className="transition hover:text-white">
                Repair or Replace?
              </Link>
              <Link href="/" className="transition hover:text-white">
                Water Quality Solutions
              </Link>
              <Link href="/" className="transition hover:text-white">
                Indoor Air Quality & Moisture Control
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#DE7B42]">
              Contact
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7">
              <a
                href="tel:+12142527320"
                className="block text-xl font-semibold text-white"
              >
                (214) 252-7320
              </a>
              <p className="transition hover:text-white">
                <span className="font-semibold text-white">
                  Schedule Online
                </span>
              </p>
              <p className="transition hover:text-white">
                <span className="font-semibold text-white">hvac.com</span>
              </p>
              <p className="text-[#B1B7C0]">Grapevine, TX 76051</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-[#858C95] sm:flex sm:items-center sm:justify-between">
          <p>© 2026 HVAC A/C & Plumbing. All rights reserved.</p>
          <p className="mt-4 sm:mt-0">It’s About Time</p>
        </div>
      </div>
    </footer>
  );
}
