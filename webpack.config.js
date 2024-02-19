const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const {FileListPlugin} = require('./plugins/file-list-plugin')

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    open: true,
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': '/restapi'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
                ['@babel/preset-env', {
                  // 'useBuiltIns': 'usage',
                  // 'corejs': '3',
                  'targets': '> 0.25%, not dead',
                }],
                '@babel/preset-typescript'
              ],
              plugins: [
                ['@babel/plugin-transform-runtime', {'corejs': '3'}],
                '@babel/plugin-proposal-export-default-from',
              ]
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [require('autoprefixer')({
                overrideBrowserslist: ['last 2 versions', 'ie >= 9']
              })]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024
          }
        }
      },
      {
        test: /\.(woff2|woff|ttf|svg|eot)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 5 * 1024
          },
          generator: {
            filename: 'font/[name].[contenthash:8].[ext]',
            outputPath: './'
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebpackPlugin({
      title: 'fake-train'
    }),
    new CleanWebpackPlugin(),
    new FileListPlugin({outputFile: 'assets.md'})
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 1,
          minSize: 0,
          minChunks: 1
        },
        common: {
          name: 'common',
          chunks: 'all',
          priority: 0,
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  performance: {
    maxEntrypointSize: 1000 * 1024,
    maxAssetSize: 1000 * 1024
  }
}

