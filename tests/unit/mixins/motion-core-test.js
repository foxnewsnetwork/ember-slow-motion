import { expect } from 'chai';
import { describe, it } from 'mocha';
import Ember from 'ember';
import MotionCoreMixin from 'ember-slow-motion/mixins/motion-core';

describe('Unit | Mixin | motion core', function() {
  // Replace this with your real tests.
  it('works', function() {
    let MotionCoreObject = Ember.Object.extend(MotionCoreMixin);
    let subject = MotionCoreObject.create();
    expect(subject).to.be.ok;
  });
});
