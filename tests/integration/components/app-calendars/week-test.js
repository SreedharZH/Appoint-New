import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('app-calendars/week', 'Integration | Component | app calendars/week', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{app-calendars/week}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#app-calendars/week}}
      template block text
    {{/app-calendars/week}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
