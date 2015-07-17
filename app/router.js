import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('logout');

  this.route('dashboard', {path: '/'}, function () {
    this.route('students', function () {
      this.route('edit', {path: 'edit/:student_id'});
    });

    this.route('classes', {path: '/'}, function () {
      this.route('create', {path: 'new-class'});
      this.route('edit', {path: 'class-details/:cohort_id'});
      this.route('add-student', {path: 'add-student/:cohort_id'});
      this.route('take-attendance', {path: 'take-attendance/:cohort_id'});
    });
  });
});

export default Router;
