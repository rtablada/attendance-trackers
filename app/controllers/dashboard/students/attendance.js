import Ember from 'ember';

export default Ember.Controller.extend({
  records: Ember.computed('model.attendanceRecords.@each.date', function() {
    return this.get('model.attendanceRecords').sortBy('date');
  })
});
