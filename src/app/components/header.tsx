"use client";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50">
      <div className="block w-screen  sm:hidden">
        <div className="relative bg-slate-950 p-2">
          {/* Hamburger icon */}
          <button
            onClick={toggleMenu}
            className="text-3xl p-2 focus:outline-none"
          >
            {isOpen ? (
              <AiOutlineClose className="text-white" />
            ) : (
              <AiOutlineMenu className="text-white" />
            )}
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-10 left-0 h-full w-52 bg-slate-950 text-white transition-transform transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <nav className="p-4">
              <ul className="space-y-8 ">
                <li className="border-b-2 border-white">
                  <a href="#" onClick={toggleMenu}>
                    HOME
                  </a>
                </li>
                <li className="border-b-2 border-white">
                  <a href="#about" onClick={toggleMenu}>
                    ABOUT
                  </a>
                </li>
                <li className="border-b-2 border-white">
                  <a href="#projects" onClick={toggleMenu}>
                    PROJECTS
                  </a>
                </li>
                <li className="border-b-2 border-white">
                  <a
                    href="/Collins Ennah - Frontend Resume .pdf" target="_blank"
                    download
                    onClick={toggleMenu}
                  >
                    RESUME
                  </a>
                </li>
                <li className="border-b-2 border-white">
                  <a href="#contact" onClick={toggleMenu}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div className="hidden sm:block">
        <nav className="  py-6 w-screen  bg-slate-950 border-solid border-2 border-slate-900 inline-flex justify-between sm:px-16 lg:px-36   ">
          <div className=" font-bold flex ">
            <span className="text-white">About</span>
            <span className="text-yellow-500">Me.</span>
          </div>

          <div className="text-gray-200 flex gap-4">
            <Link href="#" className=" hover:text-gray-500 ">
              HOME
            </Link>
            <Link href="#about" className=" hover:text-gray-500  ">
              ABOUT
            </Link>
            {/* <Link href="#" className=" hover:text-gray-500">
              SERVICES
            </Link> */}
            <Link href="#projects" className=" hover:text-gray-500">
              PROJECTS
            </Link>
            <Link href="/Collins Ennah - Frontend Resume .pdf" target="_blank" title="download resume" download>
              RESUME
            </Link>

            <Link href="#contact" className=" hover:text-gray-500">
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
