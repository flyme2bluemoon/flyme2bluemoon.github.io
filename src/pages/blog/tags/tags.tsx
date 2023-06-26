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
          slug
        }
        id
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
          slug: string,
        },
        id: string,
      }]
    }
  }
}

const Blog = ({ data, pageContext }: mdxQuery) => {
  if (typeof window !== "undefined") {
    typeof pageContext.tag === "undefined" && navigate("/blog");
  }
  return (
    <Layout pageTitle={pageContext.tag}>
      <>
        <BlogNavbar />
        <div className="max-w-[720px] mx-auto">
          <h1 className="font-bold text-6xl py-5">{pageContext.tag}</h1>
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
