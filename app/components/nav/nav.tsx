import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <header
      className="lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]
      mx-auto px-6 w-full h-fit bg-transparent"
    >
      <nav className="size-full mx-auto py-5 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-[#16f2b3]  text-3xl font-bold">Yassin hegazy</h1>
        </Link>
        <ul className="flex max-w-[595px] max-sm:hidden  items-center text-white ">
          <li className="text-sm text-white  block px-4 py-2">
            <Link
              className="transition-colors duration-300 hover:text-pink-600"
              href={"#about"}
            >
              ABOUT
            </Link>
          </li>
          <li className="text-sm text-white  block px-4 py-2">
            <Link
              className="transition-colors duration-300 hover:text-pink-600"
              href={"#contactMe"}
            >
              CONTACT ME
            </Link>
          </li>
          <li className="text-sm text-white  block px-4 py-2">
            <Link
              className="transition-colors duration-300 hover:text-pink-600"
              href={"#skills"}
            >
              SKILLS
            </Link>
          </li>
          <li className="text-sm text-white  block px-4 py-2">
            <Link
              className="transition-colors duration-300 hover:text-pink-600"
              href={"#projects"}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
