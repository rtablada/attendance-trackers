import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newClass: function () {
      this.transitionToRoute('dashboard.classes.create');
    }
  }
});
