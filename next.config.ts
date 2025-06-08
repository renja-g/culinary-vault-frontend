import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/recipes',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    loader:"custom",
    loaderFile:"./lib/imageLoader.ts",
  },
};

export default nextConfig;
