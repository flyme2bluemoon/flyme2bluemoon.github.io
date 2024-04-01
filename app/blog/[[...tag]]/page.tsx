import BlogNavbar from "@/components/blog/blogNavbar";
import BlogPostCard from "@/components/blog/blogPostCard";
import { getSortedPostsData, getTagsList } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Shen - Blog",
  description:
    "A collection of some of Matthew's random thoughts that hopefully you find enjoyable or interesting enough to read.",
};

type Props = {
  params: {
    tag: string[];
  };
};

export const generateStaticParams = async () => {
  const staticParams = getTagsList().map((tag) => ({
    tag: ["tags", tag.toLowerCase().replace(" ", "-")],
  }));
  staticParams.push({ tag: [] });
  return staticParams;
};

const Blog = ({ params }: Props) => {
  let postsData = getSortedPostsData();

  const tag = params.tag;
  if (typeof tag !== "undefined") {
    postsData = postsData.filter((post) =>
      post.tags
        .map((tag) => tag.toLowerCase().replaceAll(" ", "-"))
        .includes(params.tag[1])
    );
  }

  return (
    <>
      <BlogNavbar />
      <div className="lg:w-3/5 md:w-4/5 px-3 mx-auto pb-16">
        <h1 className="font-bold text-6xl pt-5">
          {typeof params.tag === "undefined" ? "blog" : params.tag[1]}
        </h1>
        <div className="my-5 px-4 border-l-4 border-blue-400 dark:border-blue-800">
          A collection of some of my random thoughts that hopefully you find
          enjoyable or interesting enough to read.
        </div>
        {postsData.map((node) => (
          <BlogPostCard
            key={node.id}
            title={node.title}
            author={node.author}
            date={node.date}
            slug={node.slug}
            tags={node.tags}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
