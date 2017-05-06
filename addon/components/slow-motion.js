import Ember from 'ember';
import layout from '../templates/components/slow-motion';
import RunMixin from 'ember-lifeline/mixins/run';
import MotionCore from '../mixins/motion-core';
import { MS_PER_FRAME } from '../mixins/motion-core';

const {
  guidFor,
  set
} = Ember;

export default Ember.Component.extend(RunMixin, MotionCore, {
  layout,
  tagName: '',

  init(...args) {
    this._super(...args);
    this.pollTask('progressTransition', `slow-motion:${guidFor(this)}#progressTransition`);
  },
  progressTransition(next) {
    const {
      scaledTransitionFunction,
      transitionPercentage,
      percentagePerFrame,
      isDone,
      isError
    } = this.getProperties(
      'scaledTransitionFunction',
      'transitionPercentage',
      'percentagePerFrame',
      'isDone',
      'isError'
    );
    if (!isDone) {
      set(this, 'inbetweenValue', scaledTransitionFunction(transitionPercentage));
      this.incrementProperty('transitionPercentage', percentagePerFrame);
    }
    if (isError) {
      Ember.Logger.error(
        '[slow-motion] Encountered an error where the animation was being run backwards for some reason',
        this
      );
    } else {
      this.runTask(next, MS_PER_FRAME);
    }
  }
});
