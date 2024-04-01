import Repo from "@/components/repo";
import { getRepos } from "@/utils/githubstats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Shen - Projects",
  description:
    "A gallery of Matthew's public Github repositories where he works on coding projects he is interested in.",
};

const Projects = async () => {
  const pins: string[] = [
    "flyme2bluemoon.github.io",
    "Advent-of-Code-2023",
    "Synacor-VM-Challenge",
  ];
  const pinGallery: JSX.Element[] = [];
  const gallery: JSX.Element[] = [];

  const repos = await getRepos();

  for (let i = 0; i < repos.data.length; i++) {
    const card: JSX.Element = (
      <Repo
        key={repos.data[i].full_name}
        full_name={repos.data[i].full_name}
        name={repos.data[i].name}
        html_url={repos.data[i].html_url}
        description={repos.data[i].description}
        language={repos.data[i].language}
      />
    );

    if (pins.includes(repos.data[i].name)) {
      pinGallery.push(card);
    } else {
      gallery.push(card);
    }
  }

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <h1 className="text-6xl font-bold py-6">Projects</h1>
        <h2 className="text-5xl font-semibold py-6">
          Pinned &#x2728; {/* sparkles emoji */}
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-10 justify-center pb-10">
            {pinGallery}
          </div>
        </div>
        <h2 className="text-5xl font-semibold py-6">All Repositories</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap gap-10 justify-center pb-10">
            {gallery}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
