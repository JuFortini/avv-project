'use client'

import Link from "next/link";
import { MenuDropdown } from "./components/MenuDropdown";
import { BookingButton } from "./components/BookingButton";
import { MenuMobile } from "./components/MenuMobile";
import { useState } from "react";
import { List } from "phosphor-react";

export function Header(): JSX.Element {
  const [isDrawerMenuOpen, setIsDrawerMenuOpen] = useState(false);
  const personalShadow = 'shadow-[0_16px_32px_-16px_rgba(58,135,118,0.1)]';
  return (
    <div className="absolute w-full">
      <div className={`relative bg-teal-50 px-8 lg:px-16 py-2 flex justify-center items-center z-10 ${personalShadow}`}>
        <div className="flex w-full max-w-screen-xl items-center justify-between">
          <Link href="/">
            <img src="/images/logo.svg" alt="logo" className="h-14 w-24 object-contain" />
          </Link>
          <MenuDropdown />
          <div className="hidden md:block">
            <BookingButton />
          </div>
          <button className="block md:hidden" onClick={() => setIsDrawerMenuOpen(value => !value)}>
            <List size={32} color="#475569" />
          </button>
        </div>
      </div>
      <div className={`absolute md:hidden right-0 bg-slate-100
        ${isDrawerMenuOpen ? 'animate-slide_open' : 'animate-slide_close'}`}
      >
        <MenuMobile />
      </div>
    </div>
  );
};
