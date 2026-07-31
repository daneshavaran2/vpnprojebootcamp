"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = ["About", "Features", "Pricing", "Testimonials", "Help"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[15px] text-muted transition-colors hover:text-navy"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-6 sm:flex">
          <a href="#" className="text-[15px] font-semibold text-navy">
            Sign In
          </a>
          <a
            href="#"
            className="rounded-full border border-brand px-6 py-2.5 text-[15px] font-semibold text-brand transition-colors hover:bg-brand hover:text-white"
          >
            Sign Up
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy sm:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gray-100 px-6 pb-6 sm:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-[15px] text-muted hover:text-navy"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-4">
            <a href="#" className="text-[15px] font-semibold text-navy">
              Sign In
            </a>
            <a
              href="#"
              className="rounded-full border border-brand px-6 py-2.5 text-[15px] font-semibold text-brand"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
