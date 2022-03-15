import React, { useEffect, useState } from "react";
import { getRepoLanguages, getRepos } from "../../utils/codeGallery";
import Layout from "../components/layout";
import * as colors from "../../utils/colors.json";

const Stats = () => {
  const [languages, setLanguages] = useState<any>({});
  
  const getStats = async () => {
    const repos = await getRepos();
    let histogram: any = {};
    for (let i = 0; i < repos.length; i++) {
      if (repos[i].language !== null) {
        const languages = await getRepoLanguages(repos[i].name);
        const languageIndex = Object.keys(languages);
        for (let i = 0; i < languageIndex.length; i++) {
          histogram[languageIndex[i]] = (histogram[languageIndex[i]] ? histogram[languageIndex[i]] + languages[languageIndex[i]] : languages[languageIndex[i]]);
        }
      }
    }

    // @ts-expect-error
    histogram = Object.entries(histogram).sort(([,a],[,b]) => b-a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    setLanguages(histogram);
  }

  useEffect(() => {
    getStats();
  }, []);

  return (
    <Layout pageTitle="Stats">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-6xl font-bold py-6">My Github Stats</h1>
        <div>
          <h2 className="text-4xl font-semibold pb-6">Most Used Languages</h2>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex flex-row">
            {Object.keys(languages).map((lang) => {
              // @ts-expect-error
              const sum: number = Object.values(languages).reduce((sum, next) => (sum + next), 0);
              const count = Object.keys(languages).indexOf(lang);
              const total = Object.keys(languages).length - 1;
              return (
                <div key={lang} className={`h-2.5 ${count === 0 ? "rounded-l" : ""} ${count === total ? "rounded-r" : ""}`} style={{
                  width: `${languages[lang] / sum * 100}%`,
                  // @ts-expect-error
                  backgroundColor: colors[lang].color
                }}></div>
              );
            })}
          </div>
          <div className="grid grid-cols-3">
            {Object.keys(languages).map((lang) => {
              // @ts-expect-error
              const sum: number = Object.values(languages).reduce((sum, next) => (sum + next), 0);
              return (
                // @ts-expect-error
                <div key={lang} className="w-[80%] mx-auto py-4"><span style={{color: colors[lang].color}}>&#9679;</span> <span className="font-semibold">{lang}</span> {(languages[lang] / sum * 100).toFixed(2)}%</div>
              );
            })}
          </div>
          <small className="text-gray-500 dark:text-gray-400">Data from Github API based on most used language in each public repo</small>
        </div>
      </div>
    </Layout>
  );
}

export default Stats;
