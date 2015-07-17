import Ember from 'ember';
import config from '../config/environment';

export default Ember.Controller.extend({
  afterLoginSuccess: function () {
    this.transitionToRoute('dashboard');
  },

  actions: {
    login: function () {
      var data = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:firebase', data)
        .then(this.afterLoginSuccess.bind(this));
    },
    forgotPassword: function () {
      var firebase = new Firebase(config.firebase);

      firebase.resetPassword(this.getProperties('email'), function () {
        alert('sent');
      });
    }
  }
});
