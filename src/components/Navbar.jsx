"use client";
import { useState } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { authClient, signOut } from "@/lib/auth-client";
import { Avatar, Spinner } from "@heroui/react";
import { useRouter } from "next/navigation";


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
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data, isPending } =authClient.useSession()
  const user = data?.user;
  const router = useRouter();
  const handleSignOut = async () => {
    await signOut();
    router.replace("/");
  };
  
  return (
    <nav className="sticky top-0 z-40 w-full bg-[var(--bg-card)] border-b border-separator">
      <header className="flex py-4 items-center justify-between container mx-auto px-2 md:px-0">
        {/* Logo */}
        <div className="md:flex items-center gap-3 hidden ">
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

        {/* mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="cursor-pointer md:hidden"
        >
          ☰
        </button>
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
            <ThemeSwitch className={"block md:hidden"} />
          </div>
        )}

        {/* menu */}
        <div>
          <ul className="hidden md:flex items-center gap-4">
            {navItems.map((item, ind) => (
              <NavLinks key={ind} href={item.href} text={item.text}></NavLinks>
            ))}
          </ul>
          <div className="md:hidden">
            <Link href="/">
              <h1 className="text-2xl font-bold">
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

        <div className="flex gap-2 items-center">
          {isPending ? (
            <div className="flex flex-col items-center">
              <Spinner color="success" size="sm" />
            </div>
          ) : user ? (
            <div className="flex gap-2 items-center">
              <Avatar>
                <Avatar.Image
                  src={user?.image}
                  alt="user photo"
                  referrerPolicy="no-referrer"
                ></Avatar.Image>
                <Avatar.Fallback className="bg-[var(--neutral-warm)] text-[var(--text-main)] text-lg">
                  {user?.name.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar>
              <button onClick={handleSignOut} className="btn-signout">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <Link href={"/signin"} className="btn-signin ">
                Login
              </Link>
            </div>
          )}

          <ThemeSwitch className={"hidden md:block"} />
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
