"use client";
import { Button } from "@heroui/react";

import { useState } from "react";

import Image from "next/image";
import user from "@/assets/user.png";
import { ThemeSwitch } from "./ThemeSwitch";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
      href: "/",
      text: "Home",
    },
    {
      href: "/all_tiles",
      text: "All Tiles",
    },
    {
      href: "/my_profile",
      text: "My Profile",
    },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full bg-[var(--bg-card)] border-b border-separator">
      <header className="flex py-4 items-center justify-between container mx-auto">
        <div className="md:flex items-center gap-3 hidden ">
          <div>
            <Link href="/">
              <h1 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-soft)] bg-clip-text text-transparent">
                  Luxury
                </span>{" "}
                <span className="bg-gradient-to-r from-[var(--accent-soft)] to-[var(--neutral-warm)] bg-clip-text text-transparent">
                  Tiles
                </span>
              </h1>
            </Link>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          ☰
        </button>

        {/* mobile */}
        {open && (
          <div className=" absolute top-17 left-0 w-38 flex flex-col items-center gap-4 py-4 md:hidden bg-[var(--bg-card)] border border-[var(--border-color)] rounded-md shadow-md ">
            {navItems.map((item, ind) => (
              <Link
                key={ind}
                href={item.href}
                className="
        w-11/12 text-center py-2 rounded-lg
        transition-all duration-300

        text-[var(--text-main)]
        bg-transparent

        hover:bg-[var(--accent)]/10
        active:bg-[var(--accent)]/20

        border border-transparent
        hover:border-[var(--accent)]/30

        focus:outline-none
        focus:ring-2
        focus:ring-[var(--accent)]
      "
              >
                {item.text}
              </Link>
            ))}
          </div>
        )}

        <div>
          <ul className="hidden md:flex items-center gap-4">
            {navItems.map((item, ind) => (
              <NavLinks key={ind} href={item.href} text={item.text}></NavLinks>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <p>User</p>
            <Image src={user} alt="user" height={40} width={40} />
            <Button className="btn-primary">Login</Button>
          </div>
          <ThemeSwitch />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
