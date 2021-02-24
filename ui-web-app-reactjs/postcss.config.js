const isProd = process.env.NODE_ENV === 'production'
const purgeCss = require('@fullhuman/postcss-purgecss')
const globAll = require('glob-all')
const extractMediaQuery = require('postcss-extract-media-query')
const combineSelectors = require('postcss-combine-duplicated-selectors')
const autoprefixer = require('autoprefixer')
const sorter = require('css-declaration-sorter')
const nano = require('cssnano')
// const whitelister = require('purgecss-whitelister')


/*
  Why we scope `purgeCss` to production only.
  -------------------------------------------
  During development, CSS assets may have been previously purged
  from a webpack reload or initial load. You might try to add classes in JS
  and see no change. This avoids that.
*/
module.exports = {
  plugins: isProd ? [
    // http://bit.ly/2Xtfwao - explains why we're using purge-css here and not as a Webpack plugin.
    purgeCss({
      // Optionally whitelist 3rd party libraries:
      // whitelist: whitelister('./node_modules/some-library/styles.css'),
      content: globAll.sync([
        './src/**/*.js',
        './src/**/*.jsx',
        './src/index.ejs'
      ], { absolute: true }),
      keyframes: false // http://bit.ly/2Xnsqq2
    }),
    extractMediaQuery({ // http://bit.ly/2Z6BrUX - Replaces `mq-packer`.
      output: {
        path: null
      }
    }),
    combineSelectors({ removeDuplicatedProperties: true }),
    autoprefixer(),
    sorter(),
    nano()
  ] : [
    /*
      During development, ensure that media queries are
      combined and ordered properly so classes have the correct effect!
    */
    extractMediaQuery({ // http://bit.ly/2Z6BrUX - Replaces `mq-packer`.
      output: {
        path: null
      }
    }),
    sorter()
  ]
}
