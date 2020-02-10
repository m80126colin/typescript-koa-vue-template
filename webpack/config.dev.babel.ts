import webpackMerge from 'webpack-merge';
import { Configuration } from 'webpack';

import baseConfig from './config.base.babel';

const config : Configuration = {
  mode: 'development'
}

export default webpackMerge(baseConfig, config)