import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  status: DS.attr('string'),
  note: DS.attr('string'),

  student: DS.belongsTo('student', {async: true})
});
