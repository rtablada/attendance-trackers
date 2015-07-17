import Ember from 'ember';

export default Ember.Controller.extend({
  initProperties: [
    'title'
  ],

  saveSuccess: function () {
    this.get('cohort').save();
    this.transitionToRoute('dashboard.classes.edit', this.get('cohort'));
  },

  actions: {
    submit: function () {
      var model = this.get('model');
      var cohort = this.get('cohort');
      var properties = this.getProperties('firstName', 'lastName', 'email');

      model.setProperties(properties);
      cohort.get('students').addObject(model);
      model.save().then(this.saveSuccess.bind(this));
    },
    back: function () {
      var model = this.get('model');
      model.destroyRecord();

      this.transitionToRoute('dashboard.classes.edit', this.get('cohort'));
    }
  }
});
