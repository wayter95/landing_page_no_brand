"use client";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { Button } from "../button";
import { NavbarItems } from "./nav-items";
import { SocialItems } from "./social-items";

const navbarItems = [
  {
    id: 1,
    title: "ABOUT",
    path: "about",
  },
  {
    id: 2,
    title: "EAT",
    path: "eat",
  },
  {
    id: 3,
    title: "DRINK",
    path: "drinks",
  },
  {
    id: 4,
    title: "FUNCTIONS",
    path: "book-functions",
  }
];

const socialItem = [
  {
    id: 1,
    title: "Facebook",
    url: "https://facebook.com/",
  },
  {
    id: 2,
    title: "Instagram",
    url: "https://instagram.com/",
  }
]



const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <header className={`z-10 w-full fixed ${menuActive && "active lg:bg-rsn-green-600"} ${sticky && "bg-rsn-green-600 fixed shadow-md"}`}>
      <div className={`bg-animated bg-rsn-orange-600 ${menuActive ? "active" : ""}`}></div>
      <nav className={`flex w-full max-w-[80%] mx-auto py-4 justify-between gap-8 items-center ${menuActive ? '' : ''}`}>
        <div className={`${menuActive ? "hidden lg:block" : ""}`}>
          <Scroll to="hero" className="cursor-pointer" smooth>
            <Image
              src="/images/logo-header.png"
              alt="rosana"
              width={100}
              height={34}
              className="pointer-events-none"
            />
          </Scroll>
        </div>

        <button className={`btn-menu z-[102] flex flex-col justify-center items-center lg:hidden ${menuActive ? 'active absolute top-[5%] right-[10%]' : ''}`} onClick={() => toggleMenu()}>
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </button>

        <ul className={`relative z-[101] flex lg:items-center w-full md:w-fit gap-8 flex-col overflow-hidden h-screen lg:h-full lg:flex-row transition-all duration-300 ${menuActive ? "max-h-screen flex pt-[30%] lg:pt-0" : "max-h-0 lg:max-h-full hidden lg:flex"}`}>
          <NavbarItems data={navbarItems} onClose={toggleMenu} />
          {
            menuActive &&
            <>
              <li className="block lg:hidden">
                <SocialItems data={socialItem} onClose={toggleMenu}/>
              </li>
              <li className="w-full block lg:hidden absolute bottom-[10%]">
                <Link href="/" className="w-full" onClick={() => toggleMenu()}>
                  <Button title="BOOK A TABLE" variant="primary" />
                </Link>
              </li>
            </>
          }
          <li className="w-full hidden lg:block">
            <Link href="/" className="">
              <Button title="BOOK A TABLE" variant="secondary" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Navbar }