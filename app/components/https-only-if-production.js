import Ember from 'ember';
import config from 'dcmetromap/config/environment';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const isProduction = (config.environment === 'production');
    if (isProduction) {
      if (window.location.protocol != 'https') {
        window.location.protocol = 'https';
      }
    }
  }
});
