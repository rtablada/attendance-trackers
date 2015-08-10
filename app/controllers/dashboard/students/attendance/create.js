import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
      var date = this.get('date');

      this.get('model').setAttendance(date);

      this.transitionToRoute('dashboard.students.attendance', this.get('model'));
    }
  }
});
