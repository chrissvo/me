import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    const resumeSections = new Ember.RSVP.Promise(function(resolve) {
      return resolve(this.store.findAll('resume-section'));
    }.bind(this));

    return Ember.RSVP.hash({
      resumeSections: resumeSections
    });

  }

});
