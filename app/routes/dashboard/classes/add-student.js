import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function (controller, model) {
    var student = this.store.createRecord('student');
    student.set('cohort', model);

    controller.set('cohort', model);
    controller.set('model', student);
  }
});
