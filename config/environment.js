/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'me',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'font-src': "'self' fonts.gstatic.com netdna.bootstrapcdn.com",
      'style-src': "'self' fonts.googleapis.com 'sha256-Eaamrrh0b5a/naRsV/zg7s6+kGvexMXZQARWP6ukkg4='",
      'img-src': "'self' christian.surf",
      'script-src': "'self' www.google-analytics.com 'sha256-iif5MwxOkYnlSYFl6NQVmhaEl2rSTszLDbdCP+a5G0Y='"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    GOOGLE: {},
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    };
    ENV.GOOGLE.TRACKING_ID = 'UA-59566918-3';
  }

  return ENV;
};
