import React from "react";
import Layout from "../../../components/layout";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY")
        author
        tags
      }
      body
      timeToRead
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
      timeToRead: number
      tableOfContents: any
    }
  }
}

const Post = ({ data }: blogQuery) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="max-w-[1000px] mx-auto px-8">
        <h1 className="font-bold text-4xl md:text-6xl py-5">{data.mdx.frontmatter.title}</h1>
        <div>
          <div className="flex">
            <span className="mr-1 flex">
              <svg className="w-5 h-5 mr-1 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg>
              {data.mdx.frontmatter.date}
            </span>
            &middot;
            <span className="mx-1 flex">
              <svg className="w-5 h-5 mr-1 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
              {data.mdx.frontmatter.author}
            </span>
            &middot;
            <span className="mx-1 flex">
              <svg className="w-5 h-5 mr-1 dark:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/></svg>
              {data.mdx.timeToRead} min read
            </span>
          </div>
          <div><span className="font-semibold">Tags:</span> {data.mdx.frontmatter.tags.map(tag => (
            <Link to={`/blog/tags/${tag.toLowerCase()}/`} className="underline mr-1">{tag}</Link>
          ))}</div>
        </div>
        {/* {JSON.stringify(data.mdx.tableOfContents)} */}
        <div className="pt-5 pb-24 prose prose-xl dark:prose-invert">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

export default Post;