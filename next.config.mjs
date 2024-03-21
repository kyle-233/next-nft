/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "themegenix.net",
      },
    ],
  },
};

export default nextConfig;
