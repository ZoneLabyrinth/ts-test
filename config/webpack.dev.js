const webpack = require('webpack')
const path = require('path')


module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        // compress: true,
        historyApiFallback:true,
        port: 3001,
        hot: true,
        stats: 'errors-only'
    },
    mode: 'development'
}
