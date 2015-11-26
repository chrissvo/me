import Ember from 'ember';
import ENV from './config/environment';

var Router = Ember.Router.extend({
  location: ENV.locationType,

  notifyGoogleAnalytics: function() {
    if (ENV.GOOGLE && ENV.GOOGLE.TRACKING_ID) {
      ga('create', ENV.GOOGLE.TRACKING_ID, 'auto');
      return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
    }
    else {
      Ember.Logger.log('Would have send pageview when ENV.GOOGLE.TRACKING_ID was set: ', this.get('url'));
    }
  }.on('didTransition')
});

Router.map(function() {
  this.route('resume');
  this.route('contact');
});

export default Router;
