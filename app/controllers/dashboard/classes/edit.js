import Ember from 'ember';

export default Ember.Controller.extend({
  initProperties: [
    'title'
  ],

  saveSuccess: function () {
    this.transitionToRoute('dashboard.classes.index');
  },

  actions: {
    submit: function () {
      var model = this.get('model');

      model.setProperties(this.getProperties('title'));
      model.save().then(this.saveSuccess.bind(this));
    }
  }
});
