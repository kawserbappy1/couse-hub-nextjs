/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["i.imgur.com"], // add the hostname(s) here
  },
};

export default nextConfig;
