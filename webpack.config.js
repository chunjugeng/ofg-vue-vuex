const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const babelRunTime = require('babel-runtime');
const pkg = require('./package.json');
const port = pkg.dev.port;
const argv = require('yargs').argv;
const isProd = argv.mode === 'production';
const isDev = !isProd;


const RootSrc = './src';
const dist = getPath('./dist');

function getPath(_path) {
    return path.resolve(__dirname, _path);
}

const config = {
    mode: argv.mode,
    devtool: isDev ? 'source-map': false,
    entry: [
        'babel-polyfill',
        getPath('./src/app.js'), 
        
    ],
    output: {
        path: dist,
        chunkFilename: '[name].[chunkhash].js',
        filename: isDev ? '[name].js': '[name].[chunkhash].js',
        publicPath: isDev ? '/': 'www.ofg.com'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    // {loader: 'vue-style-loader'},
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader'},
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    'browsers': [
                                        'defaults',
                                        'not ie < 11',
                                        'last 2 versions',
                                        '> 1%',
                                        'ios 7',
                                        'last 3 ios versions'
                                    ]
                                })
                            ]
                        }
                    },
                    {loader: 'sass-loader'}

                ]

            },

            {
                test: /\.(png|jpeg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: './images/[name].[hash:8].[ext]',
                        limit: 1000
                    }
                }
            },
            {
                test: /\.(svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: './libs/[name].[hash:8].[ext]',
                        limit: 1
                    }
                }
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: './fonts/[name].[ext]',
                        limit: 1000
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'}
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
			cacheGroups: {
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: path.resolve(__dirname, 'dist/index.html'),
            template: path.resolve(__dirname, './src/layout/template.html'),
            inject: 'body',
            hash: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new VueLoaderPlugin()
    ],

    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '~': getPath('./src'),
            // 'vue': 'vue/dist/vue.js',
            '@scss': path.resolve(__dirname, 'src', 'utils', 'fonts')
        }
    }
};


config.devServer = {
    disableHostCheck: true,
	contentBase: dist,
	host: '0.0.0.0',
	port: pkg.dev.port,
	hot: false,
	inline: true,
    useLocalIp: true,
    proxy: pkg.proxy
};

module.exports = config;