const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const appdir = 'twinklecube';

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, appdir, 'index.tsx'),
    output: {
        path: path.join(__dirname, appdir, 'dist'),
        publicPath: "",
        filename: "index.js"
    },
    devtool: 'eval-source-map',
    devServer: {
        port: 3030,
        historyApiFallback: true,
        open: true
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    "sass-loader"
                ],
                include: /\.module\.(css|s(a|c)ss)$/,
                exclude: /node_modules/
            },
            {
                test: /\.(css|s(a|c)ss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                        }
                    },
                    "sass-loader"
                ],
                exclude: [/\.module\.(css|s(a|c)ss)$/, /node_modules/]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                                exportLocalsConvention: 'camelCase'
                            }
                        }
                    },
                    "less-loader"
                ],
                include: /\.module\.less$/,
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ],
                exclude: [/\.module\.less$/, /node_modules/]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp|woff|woff2|ttf|otf|eot)$/i,
                type: "asset/resource"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, appdir, 'index.html'),
            favicon: path.resolve(__dirname, appdir, 'favicon.ico')
        }),
        new MiniCssExtractPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}
