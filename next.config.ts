import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Proxy the analytics script through your own domain
        source: "/_proxy/va/script.js",
        destination: "/_vercel/insights/script.js",
      },
      {
        // Proxy events to Vercel's internal insights endpoint
        source: "/_proxy/va/:path*",
        destination: "/_vercel/insights/:path*",
      },
    ];
  },
};

export default nextConfig;
