const removeImports = require("next-remove-imports")();
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}
// module.exports = removeImports({
//   experimental: { esmExternals: true }
// });
module.exports = { 
  ... removeImports({
    experimental: { esmExternals: true }
  }),
  ... nextConfig
};


