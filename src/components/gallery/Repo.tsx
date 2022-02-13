import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { GithubRepo } from '../types/Repo';

const Repo = ({ name, html_url, og_url, description }: GithubRepo) => {
  return (
    <div key={name}>
      <div className="max-w-sm h-full flex flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href={html_url}>
          <img className="rounded-t-lg" src={og_url} alt="Opengraph for Repo" />
        </a>
        <div className="p-5 grow relative">
          <a href={html_url}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
          <p className="mb-16 font-normal text-gray-700 dark:text-gray-400">{description}</p>
          <a href={html_url} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 absolute bottom-4 left-4">
            <FontAwesomeIcon className="mr-1" icon={faGithub} />View on Github
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Repo;