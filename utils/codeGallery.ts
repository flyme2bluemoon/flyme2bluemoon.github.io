export const getRepos = async () => {
  const repos = await fetch("https://code-gallery-api.vercel.app/api/repos")
    .then(data => data.json())
    .then(res => {
      res.sort((a: any, b: any) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      });
      return res;
    });
  return repos;
}

export const getRepoImages = async (fullname: string) => {
  const og_url = await fetch(`https://code-gallery-api.vercel.app/api/get-og-image?fullname=${fullname}`)
    .then(res => res.text());
  return og_url;
}

export const getRepoLanguages = async (name: string) => {
  const languages = await fetch(`https://code-gallery-api.vercel.app/api/repos?name=${name}`)
    .then(res => res.json());
  return languages;
}