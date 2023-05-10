const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// module.exports = nextConfig;
// config.optimization.minimize = false
module.exports = {
  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/:path*",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  output: 'export',
  webpack(webpackConfig) {
    return {
      ...webpackConfig,
      optimization: {
        minimize: false
      }
    };
  }
}