import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // The certificates carry personal details (date of birth, register
        // numbers, parents' names). They stay reachable to anyone given the
        // link, but search engines are told not to index or archive them, so
        // they do not surface in a search for the name.
        source: "/certificates/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, noarchive, noimageindex, nosnippet",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
