import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  beforeModel: function () {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  }
});
