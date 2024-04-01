import { getTagsList } from "@/utils/posts";
import Link from "next/link";

const BlogNavbar = () => {
  const tagsList = getTagsList();

  return (
    <nav className="bg-blue-400 dark:bg-blue-900 px-2 sm:px-4 py-2.5 rounded-b shadow-xl">
      <ul className="flex flex-row space-x-8 mt-0 font-medium mx-auto w-fit">
        {tagsList.map((tag) => (
          <li key={tag}>
            <Link
              href={`/blog/tags/${tag.toLowerCase().replace(" ", "-")}/`}
              className="inline-block text-black rounded-md dark:text-white no-underline py-1 relative before:absolute before:block before:w-full before:h-[2px] before:bottom-1 before:left-0 before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:bg-black dark:before:bg-white before:hover:scale-x-105"
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogNavbar;
