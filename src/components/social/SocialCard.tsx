import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { SocialCardProps } from '../types/Card';

const SocialCard = ({ title, text, href, cta, icon }: SocialCardProps) => {
  return (
    <div className="p-6 w-96 bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 shadow-xl relative">
      <a href={href}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><FontAwesomeIcon icon={icon} /> {title}</h5>
      </a>
      <p className=" font-normal text-gray-700 dark:text-gray-400 mb-10">{text}</p>
      <a href={href} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-4 left-4">
        {cta}
        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </a>
    </div>
  );
}

export default SocialCard;