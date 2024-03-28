/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themegenix.net",
      },
      {
        protocol: "https",
        hostname: "themesflat.co",
      },
    ],
  },
};

export default nextConfig;
