/*
  This is a custom Webpack plugin that simply runs a function after each build.
  In Create New App, this is used to console.log the urls to the application
  in the browser as well as (conditionally) the api server url.
*/

class AfterCompilePlugin {
  constructor({ run }) {
    this.run = run
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap('AfterCompilePlugin', compilation => {
      /*
        Using `setTimeout` here simply bumps running `this.run()`
        to *after* Webpack has spewed a ton of stuff into the console.
        The idea is to have the url's mentioned above logged at the
        very last moment so they're the last thing the user sees.
      */
      setTimeout(() => this.run && this.run(), 0)
    })
  }
}

module.exports = AfterCompilePlugin
