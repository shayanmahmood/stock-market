"use client";

import { NAV_ITEMS } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <ul className="flex flex-col font-medium sm:flex-row p-2 gap-3 sm:gap-10">
      {NAV_ITEMS.map(({ href, label }) => (
        <li
          key={href}
          className={`hover:text-yellow-500 transition-colors ${
            isActive(href) ? "text-gray-100" : ""
          }`}
        >
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
