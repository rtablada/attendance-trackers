import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('student-attendance-selector', 'Integration | Component | student attendance selector', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-attendance-selector}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-attendance-selector}}
      template block text
    {{/student-attendance-selector}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
