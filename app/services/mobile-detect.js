// mobile-detect

/* global MobileDetect:true */

import Ember from 'ember';
import DS from 'ember-data';

const {
  service
} = Ember.inject;

export default Ember.Service.extend({

  mobileDetect: null,

  init: function() {
    this.set('mobileDetect', new MobileDetect(window.navigator.userAgent));
  },

  isPhone: function() {
    return this.get('mobileDetect').phone() ? true : false;
  }.property(),

  isTablet: function() {
    return this.get('mobileDetect').tablet() ? true : false;
  }.property(),

  isDesktop: function() {
    if (this.get('isPhone') === false &&
      this.get('isTablet') === false) {
      return true;
    }
    return false;
  }.property(),

  os: function() {
    return this.get('mobileDetect').os();
  }.property()

});