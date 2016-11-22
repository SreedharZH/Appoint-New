/* $Id$ */

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('setup-wizard', function() { // No I18N
    this.route('setupwizard'); // No I18N
  });


  this.route('calendar');
  this.route('mydesk');
});


export default Router;
