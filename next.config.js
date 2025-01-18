/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    const bulletUrl = new URL(`https://mariod-bullet.pages.dev/`).origin;
    return [
      {
        source: "/blog",
        destination: `${bulletUrl}`,
      }, // match all paths with extension eg .xml, .json etc.
      {
        source: "/blog/:slug(.*\\.[a-zA-Z]{2,5}$)",
        destination: `${bulletUrl}/:slug`,
      }, // match all paths starting with /blog
      {
        source: "/blog/:path*",
        destination: `${bulletUrl}/:path*/`,
      },
    ];
  },
};

module.exports = nextConfig;
