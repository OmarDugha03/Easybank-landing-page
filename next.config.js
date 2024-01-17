/** @type {import('next').NextConfig} */
const nextConfig = {
       output: 'export',
       images: {
    loader: 'custom',
    loaderFile: './imageLoader.ts',
  },
}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
  
};

module.exports = nextConfig