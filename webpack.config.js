const webpack = require('webpack');
const config = require('./webpack.config.common');

config.plugins.push(new webpack.NoErrorsPlugin());
config.devtool = "#inline-cheap-module-eval-source-map";
const tsFileName = 'toto.tsx';
config.module.loaders
    .filter((loader) => tsFileName.match(loader.test))
    .forEach((loader) => loader.loader = `react-hot!${loader.loader}`);

module.exports = config;