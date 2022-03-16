import { OutboundLink } from 'gatsby-plugin-google-gtag';
import React from 'react';
import * as colors from "../../utils/colors.json";

type GithubRepo = {
  full_name: string,
  name: string,
  html_url: string,
  description: string,
  language: string
}

const Repo = ({ full_name, name, html_url, description, language }: GithubRepo) => {
  return (
    <div key={full_name} className="w-96 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h2 className="mb-2 text-xl font-semibold tracking-tight text-blue-600 hover:underline dark:text-blue-500 flex items-center">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="mr-1 dark:fill-white">
            <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
          </svg>
          <OutboundLink href={html_url} target="_blank" rel="noopener noreferrer">{name}</OutboundLink>
        </h2>
        <p className="mb-3 text-gray-600 dark:text-gray-400">{description}</p>
        {/* @ts-expect-error */}
        {language !== null && <p className="mb-3 text-gray-600 dark:text-gray-400"><span className="mr-1" style={{color: colors[language].color}}>&#9679;</span>{language}</p>}
      </div>
    </div>
  );
}

export default Repo;