import { describe, it, before, after } from 'mocha';
import { expect } from 'chai';
import startApp from '../helpers/start-app';
import destroyApp from '../helpers/destroy-app';
import Page from '../pages/index';

describe('Acceptance | slow motion', function() {
  let application;

  before(function(done) {
    application = startApp();
    Page.visit('/');
    andThen(() => done());
  });

  after(function() {
    destroyApp(application);
  });

  it('can render the initial value', function() {
    expect(parseInt(Page.animeX)).to.equal(0);
  });

  describe('changing value', function() {
    before(function() {
      Page.fillInAnime(500);
    });

    it('should yield slowly', function() {
      expect(parseInt(Page.animeX)).to.equal(500);
    });
  });
});
