import React from 'react';
import logo from '../img/logo.png';

const Footer = () => {
  return (
    <footer id="footer" className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src={logo} className="logo mr-4 h-8" alt="flyme2bluemoon logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Matthew Shen</span>
        </div>
        <ul className="flex flex-wrap items-center mb-6 sm:mb-0">
          <li>
            <a href="#top" className="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Back to Top</a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">Designed by flyme2bluemoon in Toronto</span>
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2022 Matthew Shen. All Rights Reserved.</span>
    </footer>
  );
}

export default Footer;