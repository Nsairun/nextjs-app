const path = require('path');

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');

    // Additional webpack configuration for the server build
    if (isServer) {
      // Add server-specific webpack configuration here
    }

    return config;
  },
};

module.exports = nextConfig;