import React, { useState } from "react";
import { Link } from "gatsby";
import "../styles/chromeMoonMask.css";
// @ts-ignore
import logo from "../images/logo.png";

const Navbar = ({ toggleHandler }: { toggleHandler: () => void }) => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 rounded-b dark:bg-gray-800 shadow-lg">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex">
          <img src={logo} className="h-10 mr-3 rounded-lg" alt="" />
          <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Matthew Shen</span>
        </Link>
        <div className="flex-grow"></div>
        <button id="" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={() => {setMenuExpanded(!menuExpanded)}}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`${menuExpanded ? "" : "hidden"} w-full md:block md:w-auto`} id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/about/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
            </li>
            <li>
              <Link to="/blog/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</Link>
            </li>
            <li>
              <Link to="/projects/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projects</Link>
            </li>
            <li>
              <Link to="/stats/" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Stats</Link>
            </li>
          </ul>
        </div>
        <button className={`theme-toggle [-webkit-tap-highlight-color:transparent] ${menuExpanded ? "invisible md:visible" : ""} p-1 bg-none border-0 w-8 h-8 aspect-square rounded-md cursor-pointer touch-manipulation outline-offset-[5px] hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 ml-2 md:ml-6`} id="theme-toggle" title="Toggles light and dark theme" aria-label="auto" aria-live="polite" onClick={toggleHandler}>
          <svg className="group sun-and-moon w-full h-full" aria-hidden="true" width="2" height="24" viewBox="0 0 24 24" strokeLinecap="round">
            <circle className="sun transition-transform duration-500 ease-in-out dark:duration-250 origin-center fill-gray-700 group-hover:fill-gray-900 dark:fill-gray-300 dark:group-hover:fill-gray-100 dark:scale-[175%]" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g className="sun-beams transition-[transform,_opacity] duration-500 ease-in-out dark:duration-250 dark:-rotate-[25deg] origin-center stroke-gray-700 group-hover:stroke-gray-900 dark:opacity-0" stroke="currentColor" strokeWidth="2px">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
            <mask className="moon origin-center" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle className="transition-[transform,_cx] duration-250 ease-in-out dark:delay-250 dark:duration-500 dark:-translate-x-[7px]" cx="24" cy="10" r="6" fill="black" />
            </mask>
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
