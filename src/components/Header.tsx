"use client";
import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faGripHorizontal, faGripVertical, faX } from "@fortawesome/free-solid-svg-icons";
import { ColumnVariant, SectionHeaderProps } from "@/types/types";

export function Header({
  title,
  titleTextSize = "text-4xl",
  icon,
  textColor = "text-white",
  iconColor = "text-secondary",
  containerClass = "",
  onSearch,
  onViewToggle,
  currentView,
}: SectionHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch?.(value);
  };

  return (
  <div
 className={`flex items-center ${containerClass} ${
    !containerClass.includes("justify-") &&
    (onSearch || onViewToggle ? "justify-between" : "justify-center")
  }`}
>
      <div className="flex items-center gap-3">
        <h2 className={`${titleTextSize} font-extrabold ${textColor}`}>{title}</h2>
        {icon && <FontAwesomeIcon icon={icon} className={`${iconColor}`} size="2xl" />}
      </div>
      <div className="flex items-center gap-4">
        {onSearch && (
          <div className="flex items-center gap-2">
            {searchOpen && (
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Ara..."
                className="px-2 py-1 rounded bg-white text-black focus:outline-none"
              />
            )}
            <button onClick={() => setSearchOpen(!searchOpen)}>
              <FontAwesomeIcon
                icon={searchOpen ? faX : faMagnifyingGlass}
                size="lg"
                className="text-white"
              />
            </button>
          </div>
        )}
        {onViewToggle && (
          <div className="flex gap-2">
            <button onClick={() => onViewToggle(ColumnVariant.SINGLE)}>
              <FontAwesomeIcon
                icon={faGripVertical}
                size="lg"
                className={currentView === ColumnVariant.SINGLE ? "text-secondary" : "text-white"}
              />
            </button>

            <button onClick={() => onViewToggle(ColumnVariant.DOUBLE)}>
              <FontAwesomeIcon
                icon={faGripHorizontal}
                size="lg"
                className={currentView === ColumnVariant.DOUBLE ? "text-secondary" : "text-white"}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

