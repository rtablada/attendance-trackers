import Ember from 'ember';

export default Ember.Controller.extend({
  afterLoginSuccess: function () {
    this.transitionToRoute('dashboard');
  },

  actions: {
    login: function () {
      var data = this.getProperties('email', 'password');

      this.get('session').authenticate('authenticator:firebase', data)
        .then(this.afterLoginSuccess.bind(this));
    }
  }
});
