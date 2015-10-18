import DS from 'ember-data';

export default DS.Model.extend({

  title: DS.attr('string'),
  image: DS.attr('string'),
  description: DS.attr('string'),
  organization: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),

});
