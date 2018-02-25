let SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
module.exports = {
  navigateFallbackWhitelist: [/^(?!\/__)/], // <-- necessary for Firebase OAuth
  stripPrefix: 'dist/browser/',
  root: 'dist/browser',
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'win',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      minify: true,
      staticFileGlobs: [
        '/index.html',
        '/**.js',
        '/**.css'
      ],
      stripPrefix: '/assets/',
      mergeStaticsConfig: true, // if you don't set this to true, you won't see any webpack-emitted assets in your serviceworker config
    }),
  ]
};
