"use client";

import React from "react";

interface AsymmetricButtonProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  href?: string;
  onClick?: () => void;
  offsetColor?: string;
  offsetX?: string;
  offsetY?: string;
}

const AsymmetricButton: React.FC<AsymmetricButtonProps> = ({
  text,
  bgColor = "bg-secondary",
  textColor = "text-primary",
  href,
  onClick,
  offsetColor = "bg-primary",
  offsetX = "translate-x-1",
  offsetY = "translate-y-1",
}) => {
  const baseClasses = `
    relative
    inline-block
    px-8
    py-3
    font-bold
    z-10

  `;

  const offsetClasses = `
    absolute
    inset-0
    ${offsetColor}
    z-0
    ${offsetX} ${offsetY}
  `;

  const content = <span className={`relative z-10 ${textColor}`}>{text}</span>;

  if (href) {
    return (
      <a href={href} className="relative inline-block shadow-lg" style={{ clipPath: 'polygon( 0 0, 100% 0, 90% 100%, 5% 100%)' }}>
        <span className={offsetClasses}></span>
        <span className={`${baseClasses} ${bgColor}`}>{content}</span>
      </a>
    );
  }

  return (
    <button onClick={onClick} className="relative inline-block shadow-lg " style={{ clipPath: 'polygon( 0 0, 100% 0, 90% 100%, 10% 100%)' }}>
      <span className={offsetClasses}></span>
      <span className={`${baseClasses} ${bgColor}`}>{content}</span>
    </button>
  );
};

export default AsymmetricButton;
