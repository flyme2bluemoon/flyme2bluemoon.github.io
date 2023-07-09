import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlogPostCard from "../components/blog/blogPostCard";
import BlogNavbar from "../components/blog/blogNavbar";

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          author
          date(formatString: "D MMMM YYYY")
          tags
          title
          slug
        }
        id
      }
    }
  }
`;

type mdxQuery = {
  data: {
    allMdx: {
      nodes: [{
        frontmatter: {
          author: string,
          date: string,
          tags: string[],
          title: string
          slug: string,
        },
        id: string,
      }]
    }
  }
}

const Blog = ({ data }: mdxQuery) => {
  return (
    <Layout pageTitle="Blog">
      <>
        <BlogNavbar />
        <div className="lg:w-3/5 md:w-4/5 px-3 mx-auto pb-16">
          <h1 className="font-bold text-6xl pt-5">Blog</h1>
          <div className="my-5 px-4 border-l-4 border-blue-400 dark:border-blue-800">
            A collection of some of my random thoughts that hopefully you find enjoyable or interesting enough to read.
          </div>
          {
            data.allMdx.nodes.map((node) => (
              <BlogPostCard key={node.id} title={node.frontmatter.title} author={node.frontmatter.author} date={node.frontmatter.date} slug={node.frontmatter.slug} tags={node.frontmatter.tags} />
            ))
          }
        </div>
      </>
    </Layout>
  );
}

export default Blog;
