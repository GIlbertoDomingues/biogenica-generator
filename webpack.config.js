const webpack = require('webpack');
const path = require('path');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const entries = {
    'app': [
        path.resolve(__dirname, './src/js/app.js'),
        path.resolve(__dirname, './src/sass/app.scss')
    ]
}

const outputs = {
    'app' : {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, './public/'),
        publicPath: "./"
    },
}

module.exports = env => {
    const platform = env ? env.platform : null;
    const entry = platform || 'app';

    return {
        devtool: 'source-map',
        entry: {
            [entry] : entries[entry]
        },
        output: outputs[entry],
        watch: false,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/,
                    use: [
                        {
                            loader:  MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                includePaths: [
                                    path.resolve(__dirname, './node_modules/compass-mixins/lib')
                                ]
                            }
                        }
                    ],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'],
                            plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                        }
                    }
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'],
                            plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
                        }
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: path => {
                                    if (! /node_modules|bower_components/.test(path)) {
                                        return 'images/[name].[ext]?[hash]';
                                    }
                                    return 'images/vendor/' + path
                                        .replace(/\\/g, '/')
                                        .replace(
                                            /((.*(node_modules|bower_components))|images|image|img|assets)\//g, ''
                                        ) + '?[hash]';
                                },
                            }
                        },
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: path => {
                                    if (! /node_modules|bower_components/.test(path)) {
                                        return 'fonts/[name].[ext]?[hash]';
                                    }
                                    return 'fonts/vendor/' + path
                                        .replace(/\\/g, '/')
                                        .replace(
                                            /((.*(node_modules|bower_components))|images|image|img|assets)\//g, ''
                                        ) + '?[hash]';
                                },
                            }
                        },
                    ]
                }
            ],
            
        },
        resolve: {
            alias: {
            }
        },
        plugins: [
            new FriendlyErrorsWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: "css/[id].css"
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.ProvidePlugin({
            }),
        ],
        optimization: {
            splitChunks: {
                automaticNameDelimiter: '.',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        chunks: "all",
                        minSize: 2,
                        reuseExistingChunk: true
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        }
    }
}