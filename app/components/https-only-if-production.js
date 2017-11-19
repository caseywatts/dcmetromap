import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const isProduction = false;
    if (isProduction) {
      if (window.location.protocol != 'https') {
        window.location.protocol = 'https';
      }
    }
  }
});
