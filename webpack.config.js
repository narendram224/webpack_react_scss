const HtmllPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniFileExtractPlugin = require('mini-css-extract-plugin')
module.exports ={
    output:{
       path: path.resolve(__dirname, 'build'),
       filename:'bundle.js'
    },
    module:{
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]

            },
            {
                test:/\.html$/,
                use:[{
                    loader:'html-loader'
                }]
            },
            {
                test:/\.(jpe?g|gif|png)$/,
                use:[{
                    loader:'file-loader'
                }]
            },
            {
                test:/\.s[ac]ss$/i,
                use:[MiniFileExtractPlugin.loader,'css-loader','sass-loader']
            }
    ]
    },
    plugins:[
        new MiniFileExtractPlugin(),
        new HtmllPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ],
    devServer: {
        historyApiFallback:true,
        port:5000,
    }
}