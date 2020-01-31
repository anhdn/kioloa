const { ANALYZE, ASSET_HOST } = process.env
const withSass = require('@zeit/next-sass')

// for those who using CDN
const assetPrefix = ASSET_HOST || ''

module.exports = withSass({
  assetPrefix,
  target: 'serverless',
  webpack: (config, { dev }) => {
    config.node = {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      dns: 'empty',
      tls: 'empty'
    }
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`

    if (ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  }
})
