import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  students: DS.hasMany('student', {async: true})
});
