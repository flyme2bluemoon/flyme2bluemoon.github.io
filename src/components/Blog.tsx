import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: "Hello, world!",
      date: "5 February 2022",
      author: "Matthew Shen",
      uri: "/blog/hello-world"
    }
  ]

  return (
    <div>
      <span id="blog" className="block relative -top-10" />
      <h2 className="h2 text-center">Latest Blog Posts</h2>
      <div className="mx-auto w-3/4 p-4 border-4 rounded-lg border-gray-300 dark:border-gray-600 bg-slate-100/90 dark:bg-slate-900/90 shadow-xl">
        {posts.map(entry => {
          return (
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-4 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{entry.date}</time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{entry.title}</h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">By {entry.author}</p>
                <Link to={entry.uri} className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></Link>
              </li>
            </ol>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;