const path = require("path")

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "public/app"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react'
                        ],
                        plugins: [
                            "@babel/plugin-syntax-jsx"
                        ]
                    }
                }
            },
            {
                test: /\.(scss)$/,
                use: [{
                loader: 'style-loader', // inject CSS to page
                }, {
                loader: 'css-loader', // translates CSS into CommonJS modules
                }, {
                loader: 'postcss-loader', // Run post css actions
                options: {
                    plugins: function () { // post css plugins, can be exported to postcss.config.js
                    return [
                        require('precss'),
                        require('autoprefixer')
                    ];
                    }
                }
                }, {
                loader: 'sass-loader' // compiles Sass to CSS
                }]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}