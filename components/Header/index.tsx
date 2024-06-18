"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false); // Removed dropdownToggler

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu); // Cleanup on unmount
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-3 ${stickyMenu
        ? "bg-white !py-1 shadow transition duration-100 dark:bg-black"
        : ""
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center px-4 md:px-8 xl:flex xl:justify-between 2xl:px-0">
        {/* Logo */}
        <div className="flex items-center justify-start xl:w-1/4"> {/* Changed justify-between to justify-start */}
          <Link href="/">
            <Image
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="hidden w-full dark:block"
            />
            <Image
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              className="w-full dark:hidden"
            />
          </Link>
        </div>

        {/* Nav Menu */}
        <div
          className={`flex w-full items-center justify-center xl:flex xl:h-auto ${navigationOpen &&
            "navbar !visible mt-4 max-h-[400px] sharp-md bg-white p-7.5 shadow-solid-5 dark:bg-black xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
            }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    // Handle submenu if needed
                    <>
                      {/* Submenu code here */}
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "waterloo hover:text-primary"
                          : "hover:text-primary"
                      }
                    >
                      {menuItem.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-end gap-6 xl:w-1/4"> {/* Changed justify-between to justify-end */}
          <ThemeToggler />

          <Link
            href="#"
            className="text-regular font-medium text-waterloo hover:text-primary"
          >
            Sign Up
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center sharp-full bg-primary px-3 py-1 text-regular text-white duration-300 ease-in-out hover:bg-primaryho"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
