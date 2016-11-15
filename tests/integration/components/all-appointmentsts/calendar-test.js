import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('all-appointmentsts/calendar', 'Integration | Component | all appointmentsts/calendar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{all-appointmentsts/calendar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#all-appointmentsts/calendar}}
      template block text
    {{/all-appointmentsts/calendar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
