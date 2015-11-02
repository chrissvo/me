import Ember from 'ember';

export function even(params) {
  return params[0] % 2 === 0;
}

export default Ember.Helper.helper(even);
