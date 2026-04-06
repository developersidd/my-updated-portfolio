import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'ibb.co.com',
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  allowedDevOrigins: ['http://localhost:3000', "192.168.0.110"],
};

export default nextConfig;
