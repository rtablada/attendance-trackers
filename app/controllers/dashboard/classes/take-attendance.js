import Ember from 'ember';

export default Ember.Controller.extend({
  attendance: {},

  actions: {
    submit: function () {
      var students = this.get('model.students');
      var date = this.get('date');
      students.forEach(function (student) {
        student.setAttendance(date);
      });

      this.transitionToRoute('dashboard.classes.edit', this.get('model'));
    },
    back: function () {
    }
  }
});
