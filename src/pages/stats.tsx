import React from "react";
import Layout from "../components/layout";
import * as colors from "../../utils/colors.json";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allLanguagesNode {
      nodes {
        histogram
      }
    }
  }
`;

type stats = {
  data: {
    allLanguagesNode: {
      nodes: [{
        histogram: string
      }]
    }
  }
}

const Stats = ({ data } : stats) => {
  const languages = JSON.parse(data.allLanguagesNode.nodes[0].histogram);

  return (
    <Layout pageTitle="Stats">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="text-6xl font-bold py-6">My Github Stats</h1>
        <div>
          <div className="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
            <h2 className="text-4xl font-semibold">Most Used Languages</h2>
            <hr className="my-6 border-gray-500 dark:border-gray-400" />
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
            <small className="text-gray-500 dark:text-gray-400">Data from Github API in public repos</small>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Stats;
