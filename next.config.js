/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // output: 'export',   // Remove the comment to generate the out file
  images: {
    unoptimized: true,   // Turned off image optimization
    domains: ["localhost","aceternity.com","images.unsplash.com", "media.istockphoto.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      },
    ],
  },
  trailingSlash: true,
};

module.exports = nextConfig;
