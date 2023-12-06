"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Page } from "@/components/NavBar";

const baseClass =
  "uppercase whitespace-nowrap font-abeezee text-base px-5 py-3 rounded-3xl text-brand-black-500 hover:bg-brand-green-300";

const MainNav = ({ pages }: { pages: Page[] }) => {
  const pathname = usePathname();
  return (
    <nav className="hidden lg:flex items-center justify-center p-10">
      <ul className="flex gap-6">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  baseClass,
                  {
                    "bg-brand-green-500 text-white pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNav;