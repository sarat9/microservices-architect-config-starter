require('dotenv').config({ path: `${__dirname}/.env` }) // http://bit.ly/2WE8EJP
const { NODE_ENV, DEV_SERVER_PORT, API, API_PORT, API_WEBPACK } = process.env
const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const AfterCompilePlugin = require('./after-compile-plugin')


console.log(`

  +-----------------------------------+
  |                                   |
      NODE ENVIRONMENT: ${NODE_ENV}
  |                                   |
  +-----------------------------------+

`)

if (NODE_ENV === 'production') console.log('Building for production...\n\n')

module.exports = (env, argv) => ({
  // http://bit.ly/2w4ndaR - new in Webpack 4.
  mode: env.prod ? 'production' : 'development',

  // http://bit.ly/2IEFVfK - fail on errors when building for production.
  bail: !!env.prod,

  /*
    http://bit.ly/2vZm5Ft
    The base directory, an absolute path, for resolving
    entry points and loaders from configuration.
  */
  context: path.resolve(__dirname, 'src'),

  /*
    http://bit.ly/2w3Ahxa
    The point(s) to enter the application.
  */
  entry: [
    path.resolve(__dirname, 'src/entry.jsx')
  ],

  /*
    http://bit.ly/2JojX2u
    The top-level output key contains set of options instructing webpack
    on how and where it should output your bundles, assets and anything else
    you bundle or load with webpack.
  */
  output: {

    /*
      http://bit.ly/2KoIZP4
      This option determines the name of each output bundle.
    */
    filename: '[name].[hash].bundle.js',

    /*
      http://bit.ly/2MtdylV
    */
    chunkFilename: '[name].[hash].chunk.js',

    /*
      http://bit.ly/2KjYRSI
      The output directory as an absolute path.
    */
    path: path.resolve(__dirname, 'dist'),

    /*
      http://bit.ly/2Kmdcy1
      Adds helpful info in development when reading the generated code.
    */
    pathinfo: !env.prod,

    /*
      http://bit.ly/2KpiF75
      The URL of your `output.path` from the view of the HTML page.
      The value of the option is prefixed to every URL created by the runtime or loaders.
    */
    publicPath: '/',

    /*
      http://bit.ly/2IFBbGL
      http://bit.ly/33nRRub - PR in React codebase.
      The default global object is 'window'. To allow module chunks to work with
      web workers, a value of 'this' is used instead.
    */
    globalObject: 'this'
  },

  /*
    http://bit.ly/2KmfoWl
    These options determine how the different types of modules within a project will be treated.
  */
  module: {

    /*
      An array of Rules which are matched to requests when modules are created.
      These rules can modify how the module is created.
      They can apply loaders to the module, or modify the parser.
    */
    rules: [
      /*
        http://bit.ly/2KjZb3S
        A Rule can be separated into three parts — Conditions, Results and nested Rules.

        Conditions (http://bit.ly/2Ko8uja)
        ----------
        In a Rule the properties `test`, `include`, `exclude` and `resource` are
        matched with the resource and the property issuer is matched with the issuer.
                         --------                                             ------

        When we import './style.css' within app.js,
        the resource is /path/to/style.css and the issuer is /path/to/app.js.

        Results
        -------
        There are two output values of a Rule:
          1. Applied loaders
            - An array of loaders applied to the resource.
            - Properties: `loader`, `options`, `use`.
            - The `enforce` property affects the loader category. Whether it's a normal, pre- or post- loader.
          2. Parser options
            - An options object which should be used to create the parser for this module.
            - Properties: `parser`.

        Nested Rules
        ------------
        Nested rules can be specified under the properties `rules` and `oneOf`.
        These rules are evaluated when the Rule condition matches.
      */

      /*
        JAVASCRIPT
        ----------
        * ESx => ES5
        * JSX => ES5
      */
      {
        // sideEffects: false,
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),

        /*
          http://bit.ly/2KmGQDb
          Loaders will be applied from right to left.
          E.x.: loader3(loader2(loader1(data)))
        */
        use: [
          // http://bit.ly/2KnMe9c
          {
            /*
              http://bit.ly/2KpNbOj - Babel loader.
                - babel-loader
                - @babel/core
                - @babel/preset-env
                - @babel/preset-react
                - @babel/plugin-proposal-object-rest-spread
                - @babel/plugin-proposal-class-properties
                - @babel/plugin-syntax-dynamic-import
                - @babel/plugin-proposal-optional-chaining
                - @babel/plugin-proposal-nullish-coalescing-operator
            */
            loader: 'babel-loader',
            options: {
              presets: [
                /*
                  To get tree shaking working, we need the `modules: false` below.

                  http://bit.ly/2KkhOVv - 2ality blog mentions that the issue is caused
                  by under-the-hood usage of `transform-es2015-modules-commonjs`.

                  http://bit.ly/2KnKtZN - A comment on the above post shows that we
                  can use `modules: false`.
                */
                [
                  '@babel/preset-env', // http://bit.ly/2KoqDxm
                  {
                    modules: false, // Needed for tree shaking to work (see above).
                    useBuiltIns: 'entry', // http://bit.ly/2KkBZCu
                    corejs: { // http://bit.ly/2KkC09w
                      version: 3,
                      proposals: true
                    }
                  }
                ],
                '@babel/preset-react' // http://bit.ly/2KpNOYb
              ],

              // http://bit.ly/2KmgNfz - List of Babel plugins.
              plugins: [
                "@babel/plugin-transform-runtime",
                '@babel/plugin-proposal-object-rest-spread', // http://bit.ly/2KnLroT
                '@babel/plugin-proposal-class-properties', // http://bit.ly/2KoJQPM
                '@babel/plugin-syntax-dynamic-import', // http://bit.ly/2KoKcG6
                '@babel/plugin-proposal-optional-chaining', // http://bit.ly/2ZDuBdB
                '@babel/plugin-proposal-nullish-coalescing-operator' // http://bit.ly/2CvleQ4
              ]
            }
          }
        ]
      },

      /*
        SCSS
        ----
        * SCSS => CSS
        * Extract CSS from JS bundle => separate asset
        * Asset => <link> in index.html
      */
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          MiniCssExtractPlugin.loader, // http://bit.ly/2Kme3id
          {
            /*
              http://bit.ly/2WBprNT
              Using `fast-css-loader` combined with `fast-sass-loader` (below)
              produces about a 50% faster build. You'll notice it while developing.
              `css-loader` is still included so feel free to switch.
            */
            loader: 'fast-css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader', // http://bit.ly/2WOusTr - needs to be *after* `css-loader`.

          /*
            http://bit.ly/2WI1fcw
            Using `fast-sass-loader` combined with `fast-css-loader` (above)
            produces about a 50% faster build. You'll notice it while developing.
            `sass-loader` is still included so feel free to switch.
          */
          'fast-sass-loader'
        ]
      },

      /*
        FONTS
        -----
        * Copies fonts found within the `src` tree to the `dist` folder
        * Keeps the original file name
      */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },

      /*
        IMAGES
        ------
        * Copies fonts found within the `src` tree to the `dist` folder
        * Keeps the original file name
      */
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src/assets'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  // http://bit.ly/2WGnFeg
  resolve: {

    /*
      http://bit.ly/2WyqhuP
      Create aliases to import certain modules more easily.
      Eliminates having to type out ../../../ all the time.
    */
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      helpers: path.resolve(__dirname, 'src/helpers')
    },

    /*
      http://bit.ly/2WI1BQo
      Automatically resolve certain extensions without having to type them out.
    */
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  // http://bit.ly/2WH6fOH
  optimization: {
    minimize: !!env.prod,
    minimizer: [
      // http://bit.ly/2WEaavt - List of reasons we're using Terser instead (Webpack is too!).
      new TerserPlugin({ // http://bit.ly/2WI3M6G
        cache: true, // http://bit.ly/2WNdoNC
        parallel: true, // http://bit.ly/2WJ6hWf
        terserOptions: { // http://bit.ly/2WIWVK5
          compress: {
            ecma: 5,
            comparisons: false, // http://bit.ly/2MtqwQv
            inline: 2 // http://bit.ly/2IDJXFg
          },
          mangle: {
            safari10: true // http://bit.ly/2MsRTdv
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true // Helps minimize regex and emoji's correctly.
          }
        }
      })
    ]
  },

  // http://bit.ly/2WOvpLv
  plugins: [
    /*
      http://bit.ly/2WEeBGF
      Make global variables available to the app.
      Needed in order to use the production-ready minified version of React.
    */
    new webpack.DefinePlugin({
      // Convenience variables.
      __DEV__: !env.prod,
      __PROD__: env.prod,

      /*
        http://bit.ly/2WBx4DZ
        Needed in order to use the production-ready minified version of React.
        Avoids warnings in the console.
      */
      'process.env': {
        NODE_ENV: JSON.stringify(env.prod ? 'production' : 'development')
      }
    }),

    // This must be used in conjunction with the associated scss module rule.
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // Both options are optional.
      filename: '[name].[hash].css',
      chunkFilename: '[id].css'
    }),

    /*
      http://bit.ly/2WEalXF
      A webpack plugin to remove/clean your build folder(s) before building.
      The targeted folder is whatever is set above for `output.path`.
      Since our build process generates a js, css, and html file, we'll only
      clean those types. This allows you to put any other static assets in the
      `dist` folder worry free, such as fonts, images, etc.
    */
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['*.js', '*.css', '*.html'],
      cleanAfterEveryBuildPatterns: ['*.js', '*.css', '*.html']
    }),

    /*
      http://bit.ly/2WJ6pFd, http://bit.ly/2WBxaLR
      Generates the `index.html` file.
    */
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.ejs'),
      title: '',
      mobileThemeColor: '#000000',
      description: '',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    }),

    /*
      A simple, custom Webpack plugin to run a function after each build.
      You can see the code in `after-compile-plugin.js` in the project root dir.
    */
    !env.prod && new AfterCompilePlugin({
      run: () => {
        console.log('\n')
        API && console.log(`🌎  => API listening on port ${API_PORT}...`)
        console.log(`💻  => Application running in browser at http://35.238.203.251:${DEV_SERVER_PORT}\n\n`)
      }
    })
  ].filter(Boolean),

  // http://bit.ly/2WEpbgZ
  devServer: {
    /*
      http://bit.ly/2WHYfwO
      Tell the dev server where to serve content from.
      This is only necessary if you want to serve static files.
      Content not served from Webpack's devServer is served from here.
    */
    contentBase: path.resolve(__dirname, 'dist'),

    /*
      http://bit.ly/2WFe8nS
      '...the index.html page will likely have to be served
      in place of any 404 responses.'
    */
    historyApiFallback: true,

    /*
      http://bit.ly/2WOwJhr
      Want to view your site on your phone?
      Make sure your computer and phone are on the same wifi network,
      and navigate to your computer's ip addres: 192.1.2.3:<dev server port>
    */
    host: '0.0.0.0',

    // http://bit.ly/2WOx4kd
    open: true,

    // http://bit.ly/2WFzCkq
    port: DEV_SERVER_PORT,

    /*
      http://bit.ly/2WIXOSV, http://bit.ly/2WDMWpv
      Nobody wants to see 0.0.0.0 in the browser. This get's rid of that.
    */
    public: `http://35.238.203.251:${DEV_SERVER_PORT}`,

    /*
      http://bit.ly/2XlEOXN
      Redirect non-static asset calls to the backend API server.
      Unrecognized urls (non-API calls) will be directed to '/'.
      404's will be served `index.html` by `historyApiFallback` above.
    */
    proxy: API_WEBPACK ? {
      [API_WEBPACK]: {
        target: `http://35.238.203.251:${API_PORT}`,
        bypass(req, res, proxyOptions) {
          // Direct all non-get requests to the API server.
          if (req.method.toLowerCase() !== 'get') return

          /*
            Proxy url (browser) requests back to '/'
            and let the front end do all the routing.
            For all others, let the API server respond.
          */

          /*
            http://bit.ly/2XlEOXN
            Url / browser request - allow front end routing to handle all the things.
          */
          if ((req.headers.accept || '').includes('html')) return '/'

          // Let the API server respond by implicitly returning here.
        }
      }
    } : {}
  },

  /*
    http://bit.ly/2WFerz2
    Seems to be the fastest one with accurate line numbers
    matching what you'd see in your editor.
  */
  devtool: !env.prod && 'cheap-module-eval-source-map',

  /*
    http://bit.ly/2WFA41T
    The externals configuration option provides a way of excluding dependencies
    from the output bundles. Instead, the created bundle relies on that dependency
    to be present in the consumer's environment.

    If you want to load 3rd party libraries via a CDN instead of bundling them,
    include them here in addition to adding `<script>` tags to `index.ejs`.
  */
  // externals: {
  //   react: { root: 'react' },
  //   'react-dom': { root: 'reactDOM' },
  //   // 'react-router-dom': { root: 'ReactRouterDOM' }
  // },

  /*
    http://bit.ly/2w55YpG
    `web` is default, but if you're making a 3rd party library
    consumed in Node, change this to `node`. There are others as well.
  */
  target: 'web'
})
