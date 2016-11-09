import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('my-desk/mydesk', 'Integration | Component | my desk/mydesk', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{my-desk/mydesk}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#my-desk/mydesk}}
      template block text
    {{/my-desk/mydesk}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
