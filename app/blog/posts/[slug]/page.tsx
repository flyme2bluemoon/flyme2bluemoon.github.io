import { getPost, getSortedPostsData } from "@/utils/posts";
import type { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  const post = await getPost(params.slug);
  return {
    title: `${post.title} - Matthew Shen`,
  };
};

export const generateStaticParams = () => {
  const allPostsData = getSortedPostsData();
  return allPostsData;
};

const Post = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  return (
    <div className="mx-auto my-8 px-3 md:w-4/5 lg:w-3/5">
      <h1 className="py-5 text-3xl font-bold md:text-4xl">{post.title}</h1>
      <div>
        <div>
          <div className="flex">
            <span className="mr-1 flex">
              {/* <svg
                className="w-5 h-5 mr-2 dark:fill-white bi bi-calendar3"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg> */}
              Posted:{" "}
              {new Date(post.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            {/* &middot; */}
            {/* <span className="mx-1 flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5 mr-2 dark:fill-white bi bi-person-fill" viewBox="0 0 16 16">
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                {post.author}
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
        <div className="prose max-w-none pb-5 dark:prose-invert prose-code:before:content-none prose-code:after:content-none">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }}></div>
        </div>
        <div>
          <span className="font-semibold">Tagged in:</span>{" "}
          {post.tags.map((tag: string) => (
            <Link
              href={`/blog/tags/${tag.toLowerCase().replace(" ", "-")}/`}
              key={tag.toLowerCase()}
              className="mr-1 underline"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
