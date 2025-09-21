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
    <header className="fixed w-full z-50 bg-black-900/10 backdrop-blur-md border-b border-black-900">
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
        <nav className="hidden md:flex gap-6 text-sm font-normal font-saira">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="text-white hover:text-secondary transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
        <div className="flex items-center gap-4">
          <button>
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg"   className="text-secondary md:text-white" />
          </button>
          <Link
            href="/login"
            className="hidden md:block bg-white/90 text-primary px-6 py-2 font-semibold font-saira hover:bg-secondary  transition"
          >
            Giriş Yap
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none text-secondary"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} size="lg" />
        </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-black-900/80 backdrop-blur-md p-4 space-y-4 font-saira">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="block text-white"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="inline-block font-saira bg-secondary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Giriş Yap
          </Link>
        </div>
      )}
    </header>
  );
}
