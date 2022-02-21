/* eslint-disable unicorn/prefer-module */

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['res.cloudinary.com']
  }
};
