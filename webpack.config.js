const path = require('path');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  const mode = env.mode;

  const envPath =
    env.mode === 'production'
      ? './env/production.env'
      : env.mode === 'development'
      ? './env/dev.env'
      : './env/default.env';

  return {
    mode: mode,
    devtool: 'source-map',
    entry: path.resolve(__dirname, './src/index.tsx'),

    devServer: {
      static: {
        directory: path.join(__dirname, './build'),
      },
      hot: true,
      port: 3000,
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: 'bundle.[hash].js',
      chunkFilename: '[name].[hash].js',
      assetModuleFilename: 'assets/[contenthash][ext][query]',
      clean: true,
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash][ext]',
          },
        },
        {
          test: /\.svg/,
          type: 'asset/inline',
        },
      ],
    },
    optimization: {
      minimizer: [
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['gifsicle', { interlaced: true }],
                ['jpegtran', { progressive: true }],
                ['optipng', { optimizationLevel: 5 }],
                [
                  'svgo',
                  {
                    plugins: [
                      {
                        name: 'preset-default',
                        params: {
                          overrides: {
                            removeViewBox: false,
                            addAttributesToSVGElement: {
                              params: {
                                attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                ],
              ],
            },
          },
        }),
        new TerserPlugin({
          parallel: true,
        }),
      ],
    },
    resolve: {
      extensions: ['*', '.tsx', '.ts', '.js', '.jsx', '.css'],
      modules: ['src', 'node_modules'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        favicon: './src/assets/images/logo.jpg',
      }),
      new Dotenv({ path: envPath }),
    ],
  };
};
