import React from "react";
import Layout from "../../../components/layout";
import { graphql, navigate } from "gatsby";
import BlogPostCard from "../../../components/blog/blogPostCard";
import BlogNavbar from "../../../components/blog/blogNavbar";

export const query = graphql`
  query ($tag: String) {
    allMdx(filter: {frontmatter: {tags: {in: [$tag]}}}) {
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
  pageContext: {
    tag: string
  }
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

const Blog = ({ data, pageContext }: mdxQuery) => {
  if (typeof pageContext.tag === "undefined") {
    navigate("/blog");
  }
  return (
    <Layout pageTitle={pageContext.tag}>
      <>
        <BlogNavbar />
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-bold text-6xl py-5">{pageContext.tag}</h1>
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
