import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {

    const workExperiences = new Ember.RSVP.Promise(function(resolve) {
      return resolve(this.store.findAll('work-experience'));
    }.bind(this));

    const educationalAchievements = new Ember.RSVP.Promise(function(resolve) {
      return resolve(this.store.findAll('educational-achievement'));
    }.bind(this));

    const extracurricularActivities = new Ember.RSVP.Promise(function(resolve) {
      return resolve(this.store.findAll('extracurricular-activity'));
    }.bind(this));

    return Ember.RSVP.hash({
      workExperiences: workExperiences,
      educationalAchievements: educationalAchievements,
      extracurricularActivities: extracurricularActivities
    });

  }
  
});
