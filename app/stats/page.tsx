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

  const sum: number = Object.values(languages).reduce(
    (sum, next) => sum + next,
    0,
  );
  const total = Object.keys(languages).length - 1;

  return (
    <div className="mx-auto max-w-[1280px] px-3">
      <h1 className="py-6 text-5xl font-bold">My Github Stats</h1>
      <div className="rounded-xl border border-gray-200 bg-white bg-gradient-to-r p-5 sm:p-6 dark:border-gray-700 dark:bg-gray-900">
        <h2 className="text-4xl font-semibold">Most Used Languages</h2>
        <hr className="my-6 border-gray-500 dark:border-gray-400" />
        <div className="flex h-2.5 w-full flex-row rounded-full bg-gray-200 dark:bg-gray-700">
          {Object.keys(languages).map((lang) => {
            const count = Object.keys(languages).indexOf(lang);
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
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {Object.keys(languages).map((lang) => {
            const sum: number = Object.values(languages).reduce(
              (sum, next) => sum + next,
              0,
            );
            return (
              <div key={lang} className="mx-3 py-2 sm:w-[80%] sm:py-4">
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
  );
};

export default Stats;
