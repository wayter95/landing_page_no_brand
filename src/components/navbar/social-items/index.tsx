"use client";

import Link from "next/link";
import { useState } from "react";

interface SocialData {
  id: number;
  title: string;
  url: string;
}

interface ISocialItemProps {
  data: SocialData[];
  onClose: () => void;
}

const SocialItems = ({ data, onClose }: ISocialItemProps) => {
  const [socialMenuActive, setSocialMenuActive] = useState(false);

  return (
    <>
      <button
        type="button"
        className="flex gap-4 items-center cursor-pointer text-3xl font-semibold text-rsn-green-600"
        onClick={() => setSocialMenuActive(!socialMenuActive)}
      >
        <span className="flex items-center">SOCIAL</span>
        <svg data-accordion-icon className={`w-3 h-3 transition-transform duration-300 ${socialMenuActive ? "rotate-180" : "rotate-0"} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>

      {socialMenuActive && data.map(({ id, title, url }) => (
        <li key={id} className="mt-4">
          <Link
            href={url}
            target="_blank"
            onClick={onClose} 
            className="cursor-pointer text-base font-semibold lg:text-base lg:font-light text-rsn-green-600 lg:text-rsn-beige-300  lg:hover:text-rsn-orange-600">
            {title}
          </Link>
        </li>
      ))}
    </>
  );
};

export { SocialItems } 