import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Controller.extend({
  resetEmailFields: function () {
    this.setProperties({
      oldEmail: '',
      newEmail: '',
      emailPassword: ''
    });
  },

  resetPasswordFields: function () {
    this.setProperties({
      passwordEmail: '',
      oldPassword: '',
      newPassword: ''
    });
  },

  init: function() {
      if (config.firebase) {
          this.set('firebase', new Firebase(config.firebase));
      } else {
          throw new Error(''firebase' not defined in environment');
      }

      this._super();
  },
  firebase: null,

  afterChangeEmail: function (error) {
    if (error) {
      alert('There was an issue changing email');
      return;
    }

    alert('Email has been changed');
    this.resetEmailFields();
  },

  afterChangePassword: function (error) {
    if (error) {
      alert('There was an issue changing password');
      return;
    }

    alert('Password has been changed');
    this.resetPasswordFields();
  },

  actions: {
    submitEmail: function () {
      var attrs = {
        oldEmail: this.get('oldEmail'),
        newEmail: this.get('newEmail'),
        password: this.get('emailPassword')
      };

      this.get('firebase').changeEmail(attrs, this.afterChangeEmail.bind(this));
    },
    submitPassword: function () {
      var attrs = {
        email: this.get('passwordEmail'),
        oldPassword: this.get('oldPassword'),
        newPassword: this.get('newPassword')
      };

      this.get('firebase').changePassword(attrs, this.afterChangePassword.bind(this));
    }
  }
});
