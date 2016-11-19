/* global __dirname, process */
const path = require('path');
const webpack = require('webpack');

// Plugins
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CopyWebpackPlugin    = require('copy-webpack-plugin');
const DedupePlugin         = require('webpack/lib/optimize/DedupePlugin');
const merge                = require('webpack-merge');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const UglifyJsPlugin       = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash       = require('webpack-md5-hash');

const ENV = {
  DEV: 'development',
  PROD: 'production'
};

const TARGET = process.env.TARGET || process.env.NODE_ENV;

// Main Webpack Module
const common = {
  debug: true,
  devServer: {
    contentBase: 'src',
    historyApiFallback: true,
    host: 'localhost',
    port: 3000
  },
  entry: {
    'main': './src/main.ts'
  },
  output: {
    path: path.join(__dirname, 'dist/tree-view'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.DefinePlugin({
      'ENV': JSON.stringify(process.env.NODE_ENV || false)
    }),
    /**
     * Plugin: ContextReplacementPlugin
     * Description: Provides context to Angular's use of System.import
     *
     * See: https://webpack.github.io/docs/list-of-plugins.html#contextreplacementplugin
     * See: https://github.com/angular/angular/issues/11580
     */
    new ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      path.resolve(__dirname, 'src')
    ),
    /*
     * Plugin: HtmlWebpackPlugin
     * Description: Simplifies creation of HTML files to serve your webpack bundles.
     * This is especially useful for webpack bundles that include a hash in the filename
     * which changes every compilation.
     *
     * See: https://github.com/ampedandwired/html-webpack-plugin
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    })
  ],
  resolve: {
    extensions: ['', '.ts', '.js'],
    alias: ["spec"]
  },
  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: "tslint"
      }
    ],
    loaders: [
      { test: /.ts$/,
        loader: 'ts',
        exclude: /node_modules/,
        query: {compilerOptions: {noEmit: false}}
      },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.(png|jpe?g$|svg|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[name].[ext]'
      },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100000&mimetype=application/font-woff' },
      { test: /\.woff2$/,
        loader: 'url?limit=100000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=100000&mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file' },
      { test: /\.html$/, exclude: /node_modules/, loader: 'raw' }
    ],
    noParse: [path.join(__dirname, 'node_modules', 'angular2', 'bundles')]
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './src/themes'),
      path.resolve(__dirname, '/node_modules/bootstrap'),
      path.resolve(__dirname, '/node_modules/angular2-mdl'),
      path.resolve(__dirname, '/node_modules/flex-layout-attribute'),
    ]
  },
  tslint: {
    configuration: {
      rules: {
        quotemark: [true, "double"]
      }
    },

    // tslint errors are displayed by default as warnings
    // set emitErrors to true to display them as errors
    emitErrors: false,

    // tslint does not interrupt the compilation by default
    // if you want any file with tslint errors to fail
    // set failOnHint to true
    failOnHint: true,

    // These options are useful if you want to save output to files
    // for your continuous integration server
    fileOutput: {
      // The directory where each file's report is saved
      dir: "./tslint-report/",

      // The extension to use for each report's filename. Defaults to "txt"
      ext: "xml",

      // If true, all files are removed from the report directory at the beginning of run
      clean: true,

      // A string to include at the top of every report file.
      // Useful for some report formats.
      header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

      // A string to include at the bottom of every report file.
      // Useful for some report formats.
      footer: "</checkstyle>"
    }
  },
};

var config;

if(TARGET === ENV.PROD) {
  config = merge(common, {
    devtool: 'source-map',
    output: {
      filename: 'bundle.[hash].min.js'
    },
    module: {
      loaders: [
        { test: /\.css$/, loaders: ["style", "css"] },
        { test: /\.scss$/, loaders: ["style", "css", "sass"]},
      ]
    },
    plugins: [
      new CleanWebpackPlugin(['build'], {'verbose': false, }),
      new WebpackMd5Hash(),
      new webpack.NoErrorsPlugin(),
      // -p option at cli already enable this
      // new DedupePlugin(),
      // new UglifyJsPlugin({
      //   compress: {
      //     warnings: false
      //   },
      //   mangle: false
      // }),
    ],
  });
}

if(TARGET === ENV.DEV || TARGET === ENV.LOCAL || !TARGET) {
  config = merge(common, {
    // Setting the main public folder for the dev-server only not really necessary since middleware will override this.
    // This also contains a proxy for us to call the middleware when needed.
    devtool: 'source-map',
    devServer: {
      hot: true,
      inline: true,
      progress: true,
      port: 3000,
      host: '0.0.0.0',
      contentBase: 'src',
      historyApiFallback: true
    },
    module: {
      loaders: [
        { test: /\.css$/, loaders: ["style", "css?sourceMap"] },
        { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap"]},
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  });
}

module.exports = config;
