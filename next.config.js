const path = require("path");

const config = {
  experimental: {
    scrollRestoration: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    // Add domains here if you're hosting on Vercel and need to
    // incorporate images from external 3rd-party websites like Contentful
    domains: [],
  },
};

module.exports = config;
