import React from "react";
import Layout from "../../../components/layout";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query ($id: String!) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        author
        tags
        slug
      }
      body
      tableOfContents
    }
  }
`;

type blogQuery = {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        date: string,
        author: string,
        tags: string[]
      },
      body: string,
      tableOfContents: any
    }
  },
  children: any
}

const Post = ({ data: { mdx }, children }: blogQuery) => {

  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <div className="lg:w-3/5 md:w-4/5 mx-auto px-3 my-8">
        <h1 className="font-bold text-4xl md:text-6xl py-5">{mdx.frontmatter.title}</h1>
        <div>
          <div>
            <div className="flex">
              <span className="mr-1 flex">
                {/* <svg className="w-5 h-5 mr-2 dark:fill-white bi bi-calendar3" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg> */}
                {mdx.frontmatter.date}
              </span>
              {/* &middot; */}
              {/* <span className="mx-1 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 dark:fill-white bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                {data.mdx.frontmatter.author}
              </span>
              &middot; */}
              <span className="mx-1 flex">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 dark:fill-white bi bi-clock" viewBox="0 0 16 16">
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg> */}
                {/* {data.mdx.timeToRead} min read */}
              </span>
            </div>
          </div>
          {/* {JSON.stringify(data.mdx.tableOfContents)} */}
          <div className="py-5 prose prose-xl dark:prose-invert max-w-none prose-code:before:content-none prose-code:after:content-none">
            {children}
          </div>
          <div><span className="font-semibold">Tagged in:</span> {mdx.frontmatter.tags.map(tag => (
            <Link to={`/blog/tags/${tag.toLowerCase()}/`} className="underline mr-1">{tag}</Link>
          ))}</div>
        </div>
      </div>
    </Layout>
  );
}

export default Post;
