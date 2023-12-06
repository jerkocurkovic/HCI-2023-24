"use client";

import { useState } from "react";
import Logo from "./Logo";
import MainNav from "./MainNav";


export type Page = {
  href: string;
  title: string;
};
  
// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/news", title: "News" },
  { href: "/map", title: "Map" },
  { href: "/recycle", title: "Recycle" },
  { href: "/about", title: "About" },
  { href: "/login", title: "Log In" },
];
  
const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="container flex items-center justify-between mx-auto mb-20">
      <Logo />
      <MainNav pages={pages} />
    </div>
  );
}

export default NavBar;
