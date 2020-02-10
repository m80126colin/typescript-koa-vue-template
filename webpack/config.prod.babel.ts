import webpackMerge from 'webpack-merge';
import { Configuration } from 'webpack';

import baseConfig from './config.base.babel';

const config : Configuration = {
  mode: 'production'
}

export default webpackMerge(baseConfig, config)