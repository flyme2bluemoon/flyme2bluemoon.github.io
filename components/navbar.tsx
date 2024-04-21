"use client";
import "@/components/styles/chromeMoonMask.css";
import useDarkMode from "@/hooks/useDarkMode";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const setTheme = useDarkMode();

  const links = {
    "About": "/about/",
    "Blog": "/blog/",
    "Projects": "/projects/",
    "Lecture Notes": "https://cs.mcgill.ca/~mshen/lecture-notes/",
    "Stats": "/stats/",
  };

  return (
    <nav className="rounded-b bg-white px-2 py-2.5 shadow-lg md:px-4 dark:bg-gray-800">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex"
          onClick={() => {
            setMenuExpanded(false);
          }}
        >
          <img
            src="/images/logo.png"
            className="mr-3 rounded-lg"
            width="40px"
            height="40px"
            alt=""
          />
          <span className="self-center whitespace-nowrap text-lg font-semibold dark:text-white">
            Matthew Shen
          </span>
        </Link>
        <div className="flex-grow" />
        <div
          className={`${
            menuExpanded ? "" : "hidden"
          } order-last w-full md:order-none md:block md:w-auto`}
          id="mobile-menu"
        >
          <ul className="mt-4 flex flex-col divide-y md:mt-0 md:flex-row md:space-x-6 md:divide-none md:text-sm md:font-medium lg:space-x-8">
            {Object.entries(links).map(([text, href]) => {
              return (
                <li key={text}>
                  <Link
                    href={href}
                    onClick={() => {
                      setMenuExpanded(false);
                    }}
                    className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-50 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className="theme-toggle ml-2 aspect-square h-8 w-8 cursor-pointer touch-manipulation rounded-md border-0 bg-none p-1 outline-offset-[5px] [-webkit-tap-highlight-color:transparent] hover:bg-gray-100 md:ml-6 dark:text-gray-400 dark:hover:bg-gray-700"
          id="theme-toggle"
          title="Toggles light and dark theme"
          aria-label="auto"
          aria-live="polite"
          onClick={() => {
            setTheme(
              document.documentElement.classList.contains("dark")
                ? "light"
                : "dark",
            );
          }}
        >
          <svg
            className="sun-and-moon group h-full w-full"
            aria-hidden="true"
            width="2"
            height="24"
            viewBox="0 0 24 24"
            strokeLinecap="round"
          >
            <circle
              className="sun dark:duration-250 origin-center fill-gray-700 transition-transform duration-500 ease-in-out group-hover:fill-gray-900 dark:scale-[175%] dark:fill-gray-300 dark:group-hover:fill-gray-100"
              cx="12"
              cy="12"
              r="6"
              mask="url(#moon-mask)"
              fill="currentColor"
            />
            <g
              className="sun-beams dark:duration-250 origin-center stroke-gray-700 transition-[transform,_opacity] duration-500 ease-in-out group-hover:stroke-gray-900 dark:-rotate-[25deg] dark:opacity-0"
              stroke="currentColor"
              strokeWidth="2px"
            >
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
              <circle
                className="duration-250 dark:delay-250 transition-[transform,_cx] ease-in-out dark:-translate-x-[7px] dark:duration-500"
                cx="24"
                cy="10"
                r="6"
                fill="black"
              />
            </mask>
          </svg>
        </button>
        <button
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 md:hidden dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => {
            setMenuExpanded(!menuExpanded);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
