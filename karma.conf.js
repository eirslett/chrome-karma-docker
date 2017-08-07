const isDocker = require('is-docker')();

module.exports = config => config.set({
  customLaunchers: {
    ChromeCustom: {
      base: 'ChromeHeadless',
      // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
      // more permissions than Docker allows by default)
      flags: isDocker ? ['--no-sandbox'] : []
    }
  },
  files: [
    'test/*.js'
  ],
  // This example uses mocha and chai, but we could use something else, jasmine for example
  frameworks: ['mocha', 'chai'],
  plugins: [
    require('karma-mocha'),
    require('karma-chai'),
    require('karma-chrome-launcher'),
    require('karma-mocha-reporter'),
    require('karma-junit-reporter')
  ],
  junitReporter: {
    outputDir: 'build'
  }
});
