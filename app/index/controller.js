import Ember from 'ember';

export default Ember.Controller.extend({

  bounce: false,

  bounceForReal: function() {
    window.location.href = 'http://www.theuselessweb.com/';
  }

});
