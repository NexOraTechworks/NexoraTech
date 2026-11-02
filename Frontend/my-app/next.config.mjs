
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/client',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:7070/uploads/:path*',

      }
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'nexora-web-backend-s0y5.onrender.com',
        // port: '7070',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;
