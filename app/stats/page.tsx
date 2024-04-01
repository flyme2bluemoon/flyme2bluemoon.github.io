import { colors } from "@/utils/colors";
import { getLanguages } from "@/utils/githubstats";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matthew Shen - Stats",
  description:
    "A breakdown of Matthew's most used programming languages based on a his public Github repos.",
};

const Stats = async () => {
  const languages = await getLanguages();

  return (
    <div className="max-w-[1280px] mx-auto">
      <h1 className="text-6xl font-bold py-6">My Github Stats</h1>
      <div>
        <div className="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
          <h2 className="text-4xl font-semibold">Most Used Languages</h2>
          <hr className="my-6 border-gray-500 dark:border-gray-400" />
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex flex-row">
            {Object.keys(languages).map((lang) => {
              const sum: number = Object.values(languages).reduce(
                (sum, next) => sum + next,
                0
              );
              const count = Object.keys(languages).indexOf(lang);
              const total = Object.keys(languages).length - 1;
              return (
                <div
                  key={lang}
                  className={`h-2.5 ${count === 0 ? "rounded-l" : ""} ${
                    count === total ? "rounded-r" : ""
                  }`}
                  style={{
                    width: `${(languages[lang] / sum) * 100}%`,
                    backgroundColor: colors[lang].color
                      ? (colors[lang].color as string)
                      : undefined,
                  }}
                ></div>
              );
            })}
          </div>
          <div className="grid grid-cols-3">
            {Object.keys(languages).map((lang) => {
              const sum: number = Object.values(languages).reduce(
                (sum, next) => sum + next,
                0
              );
              return (
                <div key={lang} className="w-[80%] mx-auto py-4">
                  <span
                    style={{
                      color: colors[lang].color
                        ? (colors[lang].color as string)
                        : undefined,
                    }}
                  >
                    &#9679;
                  </span>{" "}
                  <span className="font-semibold">{lang}</span>{" "}
                  {((languages[lang] / sum) * 100).toFixed(2)}%
                </div>
              );
            })}
          </div>
          <small className="text-gray-500 dark:text-gray-400">
            Data from Github API in public repos
          </small>
        </div>
      </div>
    </div>
  );
};

export default Stats;
