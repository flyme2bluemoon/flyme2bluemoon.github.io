import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import BlogPostCard from "../components/blog/blogPostCard";
import BlogNavbar from "../components/blog/blogNavbar";

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          date(formatString: "D MMMM YYYY")
          tags
          title
        }
        id
        slug
        timeToRead
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
        },
        id: string,
        slug: string,
        timeToRead: number
      }]
    }
  }
}

const Blog = ({ data }: mdxQuery) => {
  return (
    <Layout pageTitle="Blog">
      <>
        <BlogNavbar />
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-bold text-6xl">Blog</h1>
          <div className="p-5">
            A collection of some of my random thoughts that hopefully you find enjoyable or interesting enough to read.
          </div>
          {
            data.allMdx.nodes.map((node) => (
              <BlogPostCard key={node.id} title={node.frontmatter.title} author={node.frontmatter.author} date={node.frontmatter.date} timeToRead={node.timeToRead} slug={node.slug} tags={node.frontmatter.tags} />
            ))
          }
        </div>
      </>
    </Layout>
  );
}

export default Blog;