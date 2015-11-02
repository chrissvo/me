import Ember from 'ember';

export default Ember.Controller.extend({

  mobileDetect: Ember.inject.service(),
  isPhone: Ember.computed.oneWay('mobileDetect.isPhone')

});
