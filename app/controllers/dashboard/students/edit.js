import Ember from 'ember';

export default Ember.Controller.extend({
  initProperties: [
    'firstName',
    'lastName',
    'edit',
  ],

  saveSuccess: function () {
    this.transitionToRoute('dashboard.classes.edit', this.get('model.cohort'));
  },

  actions: {
    submit: function () {
      var model = this.get('model');
      var properties = this.getProperties('firstName', 'lastName', 'email');

      model.setProperties(properties);
      model.save().then(this.saveSuccess.bind(this));
    },
    back: function () {
      var model = this.get('model');
      model.destroyRecord();

      this.transitionToRoute('dashboard.classes.edit', this.get('cohort'));
    }
  }
});
