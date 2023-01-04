import React from "react";
import Layout from "../components/layout";
import Repo from "../components/repo";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allRepoNode {
      edges {
        node {
          full_name
          name
          html_url
          description
          language
          og_image_url
        }
      }
    }
  }
`;

type repo = {
  data: {
    allRepoNode: {
      edges: [{
        node: {
          full_name: string,
          name: string,
          html_url: string,
          description: string,
          language: string,
          og_image_url: string,
        }
      }]
    }
  }
}

const Projects = ({ data }: repo) => {
  const pins: string[] = ["flyme2bluemoon.github.io", "Advent-of-Code-2022", "Hamming-Code", "Epidemic-Modelling", "Advent-of-Code-2021"];
  const pinGallery: JSX.Element[] = [];
  const gallery: JSX.Element[] = [];

  const repos = data.allRepoNode.edges;

  for (let i = 0; i < repos.length; i++) {
    const card: JSX.Element = <Repo key={repos[i].node.full_name} full_name={repos[i].node.full_name} name={repos[i].node.name} html_url={repos[i].node.html_url} description={repos[i].node.description} language={repos[i].node.language} og_image_url={repos[i].node.og_image_url} />;

    if (pins.includes(repos[i].node.name)) {
      pinGallery.push(card);
    } else {
      gallery.push(card);
    }
  }

  return (
    <Layout pageTitle="Projects">
      <div className="max-w-[1280px] mx-auto">
      <div className="mb-12">
        <h1 className="text-6xl font-bold py-6">Projects</h1>
          <h2 className="text-5xl font-semibold py-6">Pinned &#x2728; {/* sparkles emoji */}</h2>
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
    </Layout>
  );
}

export default Projects;
