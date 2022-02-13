import React, { useEffect, useState } from 'react';
import { faMoon, faSun, faDesktop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppearanceToggle = () => {
  const [appearance, setAppearance] = useState("light");

  const darkModeWatcher = window.matchMedia("(prefers-color-scheme: dark)");

  const updateAppearance = () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && darkModeWatcher.matches)) {
      document.documentElement.classList.add("dark");
      setAppearance("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setAppearance("light");
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(updateAppearance,  []);

  darkModeWatcher.onchange = (e) => {
    updateAppearance();
  }

  const setLightMode = () => {
    localStorage.theme = "light";
    updateAppearance();
  }

  const setDarkMode = () => {
    localStorage.theme = "dark";
    updateAppearance();
  }

  const resetAppearance = () => {
    localStorage.removeItem("theme");
    updateAppearance();
  }

  return (
    <>
      <button type="button" id="appearance-toggle" data-dropdown-toggle="appearance-toggle-dropdown" className="text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 focus:ring-0 rounded-lg p-2.5 text-center inline-flex items-center w-10 h-10">
        <FontAwesomeIcon className="w-10 h-10 mx-auto" icon={appearance === "dark" ? faMoon : faSun} />
      </button>
      <div id="appearance-toggle-dropdown" className="hidden z-10 w-44 text-base list-none border-2 border-gray-400 bg-white rounded-lg divide-y divide-gray-100 shadow-2xl dark:bg-gray-700 dark:divide-gray-600">
        <ul className="py-1" aria-labelledby="dropdownLargeButton">
          <li>
            <button onClick={setLightMode} type="button" className="w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
              <FontAwesomeIcon className="mr-2" icon={faSun} /> 
              Light
            </button>
          </li>
          <li>
            <button onClick={setDarkMode} type="button" className="w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
              <FontAwesomeIcon className="mr-2" icon={faMoon} /> 
              Dark
            </button>
          </li>
          <li>
            <button onClick={resetAppearance} type="button" className="w-full text-left block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">
              <FontAwesomeIcon className="mr-2" icon={faDesktop} /> 
              System
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default AppearanceToggle;