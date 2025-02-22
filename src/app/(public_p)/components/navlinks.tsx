"use client";
import { NAV_LINKS } from "@/constants/app.contants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center gap-5 max-sm:hidden ">
      {NAV_LINKS.map((link) => (
        <li
          key={link.href}
          className={pathname === link.href ? "text-primary" : "text-zinc-400"}
        >
          <Link href={link.href} className="text-sm ">
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
