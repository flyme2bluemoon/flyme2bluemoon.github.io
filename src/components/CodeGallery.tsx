import React, { useEffect, useState } from 'react';
import getRepos from '../api/getRepos';
import getRepoImage from '../api/getRepoImage';
import type { GithubRepo } from './types/Repo';
import Repo from './gallery/Repo';
import Loading from './Loading';

const CodeGallery = () => {
  const [gallery, setGallery] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pins = ["flyme2bluemoon.github.io", "Advent-of-Code-2021", "Hamming-Code", "Epidemic-Modelling"];

    const fetchData = async() => {
      const response = await getRepos();
      const newGallery = [];
      for (let i = 0; i < pins.length; i++) {
        const index = response.findIndex((j: GithubRepo) => (j.name === pins[i]));
        response[index].og_url = await getRepoImage(response[index].full_name);
        newGallery.push(response[index]);
      }
      setGallery(newGallery);
      setLoading(false);
    }

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-24">
      <span id="repos" className="block relative -top-10" />
      <h2 className="h2 text-center">My Projects</h2>
      <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
        {loading ? <Loading /> : gallery.map(cardInfo => (<Repo key={cardInfo.name} name={cardInfo.name} html_url={cardInfo.html_url} og_url={cardInfo.og_url} description={cardInfo.description} />))}
      </div>
    </div>
  );
}

export default CodeGallery;