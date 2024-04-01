import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.GITHUB_API_KEY,
});

export const getRepos = async () => {
  return await octokit.request("GET /users/{username}/repos", {
    username: "flyme2bluemoon",
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
};

export const getLanguages = async () => {
  const repos = await getRepos();

  let languages: { [key: string]: number } = {};

  for (let i = 0; i < repos.data.length; i++) {
    const repoLanguages = await octokit.request(
      "GET /repos/{owner}/{repo}/languages",
      {
        owner: "flyme2bluemoon",
        repo: repos.data[i].name,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );

    for (let key in repoLanguages.data) {
      if (languages.hasOwnProperty(key)) {
        languages[key] += repoLanguages.data[key];
      } else {
        languages[key] = repoLanguages.data[key];
      }
    }
  }

  languages = Object.fromEntries(
    Object.entries(languages).sort(([, a], [, b]) => b - a)
  );

  return languages;
};
