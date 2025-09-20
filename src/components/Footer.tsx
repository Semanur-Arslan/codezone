import { MENU_ITEMS, SOCIAL_LINKS } from "@/constants/constants";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container flex flex-col md:gap-24 gap-8">
      <div className="flex flex-col gap-12">
      <div className="border-b border-black-700 py-3">
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-3 py-2 rounded-md text-white outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 text-secondary font-bold"
          >
            GÖNDER
            <FontAwesomeIcon icon={faArrowRight} className="text-secondary ml-2" size="xs" />
          </button>
        </form>
      </div>

      {/* Socials */}
      <div className="flex gap-2">
        {SOCIAL_LINKS.map(({ name, icon, href }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary"
          >
            <FontAwesomeIcon icon={icon} size="2xl" />
          </a>
        ))}
      </div>
</div>
<div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-6">
        {MENU_ITEMS.map(({ name, href }) => (
          <a
            key={name}
            href={href}
            rel="noopener noreferrer"
            className="text-white hover:text-secondary transition"
          >
            {name}
          </a>
        ))}
      </div>

   {/* Copyright */}
      <div className="text-black-500 text-sm mt-8">
        © RAPKOLOGY All Rights Are Reserved 2022.
      </div>
</div>
    </footer>
  );
}
