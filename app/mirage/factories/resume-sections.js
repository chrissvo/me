import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({

  'title': faker.hacker.phrase,
  'description': faker.lorem.sentence

});
