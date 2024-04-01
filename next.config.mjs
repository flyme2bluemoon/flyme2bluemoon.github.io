/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Configure Static Exports
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
