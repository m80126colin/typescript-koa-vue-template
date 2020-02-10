import path        from 'path';
import webpack     from 'webpack';
import HtmlWebpack from 'html-webpack-plugin';
import VueLoader   from 'vue-loader/lib/plugin';

const resolvePath = (...dirs : string[]) : string => path.resolve(__dirname, '..', ...dirs)

export default {
  entry: [
    resolvePath('client', 'main.ts')
  ],
  output: {
    filename: '[name].[hash:8].js',
    path: resolvePath('dist', 'site'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.es6', '.json'],
    alias: {
      '@': resolvePath('client')
    }
  },
  module: {
    rules: [
      { test: /\.vue$/,     loader: 'vue-loader'   },
      { test: /\.[jt]sx?$/, loader: 'babel-loader' },
      { test: /\.css$/,     use: ['vue-style-loader', 'css-loader'] },
      { test: /\.(png|jpe?g|gif|svg|eot|woff2?|ttf)$/i,
        use: [ { loader: 'file-loader' } ] }
    ]
  },
  plugins: [
    new VueLoader(),
    new HtmlWebpack({
      template: resolvePath('client', 'index.html')
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}