import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
  // The lab moved from herbertdigitalfirst.com to umbs-digitalfirst.com.
  // Permanently redirect every old URL to the same path on the new domain.
  async redirects() {
    return ["herbertdigitalfirst.com", "www.herbertdigitalfirst.com"].map((host) => ({
      source: "/:path*",
      has: [{ type: "host" as const, value: host }],
      destination: "https://umbs-digitalfirst.com/:path*",
      permanent: true,
    }));
  },
};

export default nextConfig;
