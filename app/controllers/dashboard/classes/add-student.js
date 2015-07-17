import Ember from 'ember';

export default Ember.Controller.extend({
  initProperties: [
    'title'
  ],

  saveSuccess: function () {
    this.transitionToRoute('dashboard.classes.edit', this.get('cohort'));
  },

  actions: {
    submit: function () {
      var model = this.get('model');
      var properties = this.getProperties('firstName', 'lastName', 'email');

      model.setProperties(properties);
      this.get('cohort').save();
      model.save().then(this.saveSuccess.bind(this));
    },
    back: function () {
      var model = this.get('model');
      model.destroyRecord();

      this.transitionToRoute('dashboard.classes.edit', this.get('cohort'));
    }
  }
});
