import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          author
        }
        id
        slug
        body
      }
    }
  }
`;

type mdxQuery = {
  data: {
    allMdx: {
      nodes: [{
        frontmatter: {
          date: string,
          title: string,
          author: string
        },
        id: string,
        slug: string,
        body: string
      }]
    }
  }
}

const Blog = ({ data }: mdxQuery) => {
  return (
    <Layout pageTitle="Blog">
      <div className="max-w-[720px] mx-auto">
        <h1 className="font-bold text-6xl py-5">Blog</h1>
        {
          data.allMdx.nodes.map((node) => (
            <div key={node.id} className="block p-3 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{node.frontmatter.title}</h2>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">{node.frontmatter.author} &middot; {node.frontmatter.date}</div>
              <Link to={`/blog/${node.slug}/`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read
                <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
          ))
        }
      </div>
    </Layout>
  );
}

export default Blog;