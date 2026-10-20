/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/client', // Replace with your target page
   // true triggers a 301 permanent redirect; false triggers a 307 temporary redirect
      },
    ]
  },
  /* config options here */
};

export default nextConfig;
