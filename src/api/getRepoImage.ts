const getRepoImage = async (fullname: string) => {
  const imageUrl = await fetch(`https://code-gallery-api.vercel.app/api/get-og-image?fullname=${fullname}`)
    .then(res => res.text());
  return imageUrl;
}

export default getRepoImage;