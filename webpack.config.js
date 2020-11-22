const {StylableWebpackPlugin} = require('@stylable/webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                ['@babel/plugin-proposal-class-properties', {
                                    loose: true,
                                }],
                                ['@babel/plugin-transform-runtime', {
                                    corejs: false,
                                    regenerator: true,
                                    useESModules: true
                                }]
                            ],
                            presets: [
                                ['@babel/preset-env', {
                                    // Allow importing core-js in entrypoint and use browserlist to select polyfills
                                    useBuiltIns: 'entry',
                                    // Set the corejs version we are using to avoid warnings in console
                                    corejs: 3,
                                    // Exclude transforms that make all code slower
                                    exclude: ['transform-typeof-symbol'],
                                }],
                                ['@babel/preset-react', {
                                    useBuiltIns: true,
                                    runtime: 'classic'
                                }],
                                '@babel/preset-typescript'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'node_modules/wix-animations'),
                    path.join(__dirname, 'node_modules/wix-style-react'),
                    path.join(__dirname, 'node_modules/bootstrap-sass')
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                                exportLocalsConvention: 'camelCase',
                            }
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ],
            },
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.jsx', '.json'],
    },
    plugins: [new StylableWebpackPlugin(), new HtmlWebpackPlugin({title: 'Stylable App'})],
    devServer: {
        historyApiFallback: true
    }
};
