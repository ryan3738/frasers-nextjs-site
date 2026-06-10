module.exports = {
  transpilePackages: ['next-tinacms-cloudinary'],
  turbopack: {
    root: __dirname
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html'
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};
