const webpack = require('webpack');
const config = require('./webpack.config.common');

config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devtool = "#inline-cheap-module-eval-source-map";

module.exports = config;