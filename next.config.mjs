/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/characters",
      permanent: true,
    },
  ],
};

export default nextConfig;
