// next.config.js

const withFonts = require("next-fonts");

module.exports = withFonts({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "file-loader"],
    });
    return config;
  },
});