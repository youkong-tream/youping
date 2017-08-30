var path = require('path')
var utils = require('./utils')

var projectRoot = path.resolve(__dirname, '../')
const vuxLoader = require('vux-loader')

var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

let webpackConfig = {
  devServer: {
        hot: true,
        inline: true, //其实很简单的，只要配置这个参数就可以了
        proxy: [{
            path: '/app/*',
            // target: 'http://192.169.2.246:10086/mockjsdata/3',
            target: 'http://192.169.2.246:28900',
            // target: 'http://192.169.2.110:8084/',
            // target: 'http://127.0.0.1:8084/',
            secure: false
        }, {
            path: '/do/upload/*',
            // target: 'http://192.169.2.246:10086/mockjsdata/3',
            target: 'http://192.169.2.246:28900',
            // target: 'http://192.169.2.110:8084/',
            // target: 'http://127.0.0.1:8084/',
            secure: false
        }, {
            path: '/mobile/favicon.ico',
            // target: 'http://192.169.2.246:10086/mockjsdata/3',
            target: 'http://192.169.2.246:28900',
            // target: 'http://192.169.2.110:8084/',
            // target: 'http://127.0.0.1:8084/',
            secure: false
        },{
            path: '/mobile/lib/amaze/js/amazeui.min.js',
            target: 'http://192.169.2.246:28900',
            // target: 'http://127.0.0.1:8084/',
            secure: false
        }]
    },
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}


module.exports = vuxLoader.merge(webpackConfig, {
  plugins: ['vux-ui', 'progress-bar', 'duplicate-style']
})
