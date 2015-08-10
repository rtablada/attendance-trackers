import DS from 'ember-data';
import Ember from 'ember';

const typeDays = function(str) {
  return Ember.computed('attendanceRecords.@each.status', function() {
    return this.get('attendanceRecords').filter(function(record) {
      return record.get('status') === str;
    }).length;
  });
};

export default DS.Model.extend({
  email: DS.attr('string'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  currentAttendance: 'on-time',
  currentAttendanceNote: '',

  fullName: function () {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }.property('firstName', 'lastName'),

  cohort: DS.belongsTo('cohort', {async: true}),
  attendanceRecords: DS.hasMany('attendance-record', {async: true}),

  setAttendance: function (date) {
    date = new Date(date);
    var attendanceRecord = this.store.createRecord('attendance-record');
    attendanceRecord.set('status', this.get('currentAttendance'));
    attendanceRecord.set('date', date);

    this.get('attendanceRecords').pushObject(attendanceRecord);
    attendanceRecord.save().then(this.save.bind(this));
  },

  onTimeDays: typeDays('on-time'),
  less15Days: typeDays('less-15'),
  more15Days: typeDays('more-15'),
  more30Days: typeDays('more-30')
});
