"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { MENU_ITEMS } from "@/constants/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[var(--black-900)]/70 backdrop-blur-md border-b border-black-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={180}
            height={38}
            priority
            className="dark:invert"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[var(--secondary)] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Login */}
        <div className="flex gap-2">
        <div className="flex items-center gap-4">
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" color="#ffffff" />
          </button>
          <Link
            href="/login"
            className="hidden md:block bg-[var(--white)]/90 text-[var(--primary)] px-6 py-2  font-semibold hover:bg-[var(--secondary)]  transition"
          >
            Giriş Yap
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--black-900)]/80 backdrop-blur-md p-4 space-y-4">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block hover:text-[var(--secondary)]"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-[var(--secondary)]/90 text-[var(--primary)] px-4 py-2 rounded-lg font-semibold hover:bg-[var(--secondary)] transition"
          >
            Giriş Yap
          </Link>
        </div>
      )}
    </header>
  );
}
