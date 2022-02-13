const getRepos = async () => {
  const repos = await fetch("https://code-gallery-api.vercel.app/api/repos")
    .then(data => data.json())
    .then(res => {
      res.sort((a: any, b: any) => {
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      });
      return res;
    })
  return repos;
}

export default getRepos;