"use client";
import { CategoryContext } from "@/provider/CategoryProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const NavLinks = ({ href, text }) => {
  const pathName = usePathname();
  const {setCategory}=useContext(CategoryContext);
  return (
    <li>
      <Link
        href={href}
        onClick={()=>{href==="/all_tiles"&&setCategory("All")}}
        className={`font-semibold text-[var(--text-muted)] ${pathName === href && "btn-primary"}`}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavLinks;
