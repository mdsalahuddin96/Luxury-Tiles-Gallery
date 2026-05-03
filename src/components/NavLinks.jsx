"use client";
import Link from "next/link";
import { usePathname} from "next/navigation";


const NavLinks = ({href, text }) => {
  const pathName = usePathname();
  // const router=useRouter()
  return (
    <li>
      <Link href={href} className={`font-semibold text-[var(--text-muted)] ${pathName === href && "btn-primary"}`}>
       {text}
      </Link>
    </li>
  );
};

export default NavLinks;
