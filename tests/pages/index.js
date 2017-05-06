import {
  create,
  visitable,
  text,
  fillable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/'),
  animeX: text('.docs-component__test-output'),
  fillInAnime: fillable('.docs-component__animex-value')
});
