import Ember from 'ember';

export default Ember.Mixin.create({
  setupController: function (controller, model) {
    this._super(controller, model);

    var initProperties = controller.get('initProperties');

    if (initProperties) {
      var p = model.getProperties(initProperties);
      controller.setProperties(p);
    }
  }
});
