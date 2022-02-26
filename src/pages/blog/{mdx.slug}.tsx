import React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      body
    }
  }
`;

type blogQuery = {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        date: string,
        author: string
      },
      body: string
    }
  }
}

const Post = ({ data }: blogQuery) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="max-w-[1000px] mx-auto px-8">
        <h1 className="font-bold text-4xl md:text-6xl py-5">{data.mdx.frontmatter.title}</h1>
        <div className="flex">
          <span className="mr-1 flex">
            <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"/></svg>
            {data.mdx.frontmatter.date}
          </span>
          &middot;
          <span className="ml-1 flex">
            <svg className="w-5 h-5 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
            {data.mdx.frontmatter.author}
          </span>
        </div>
        <div className="py-5 prose prose-xl">
          <MDXRenderer>
            {data.mdx.body}
          </MDXRenderer>
        </div>
      </div>
    </Layout>
  );
}

export default Post;