import Ember from 'ember';
import layout from '../templates/components/free-ps4-pdp-slow-motion';
import RunMixin from 'ember-lifeline/mixins/run';
import { call } from '../utils/computed';
import bezier from '../utils/bezier';

const {
  guidFor,
  computed: { lt, oneWay, gte },
  computed,
  isPresent,
  set
} = Ember;

export const TIMING_FUNCTIONS = {
  easeInOut: bezier(0.42, 0, 0.58, 1),
  linear: bezier(0, 0, 1, 1),
  ease: bezier(0.25, 0.1, 0.25, 1),
  easeIn: bezier(0.42, 0, 1, 1),
  easeOut: bezier(0, 0, 0.58, 1)
};

const MS_PER_FRAME = 1000 / 60;
const MAX_PERCENTAGE = 1;
const PERCENTAGE_PER_TRANSITION = MAX_PERCENTAGE;
const equality = (x, y) => x === y;
export default Ember.Component.extend(RunMixin, {
  layout,
  tagName: '',
  isDone: gte('transitionPercentage', MAX_PERCENTAGE),
  isError: lt('transitionPercentage', 0),
  framesPerTransition: call('transitionDuration', totalMS => totalMS / MS_PER_FRAME),
  percentagePerFrame: call('framesPerTransition', fpt => PERCENTAGE_PER_TRANSITION / fpt),
  scaledTransitionFunction: call(
    'transitionTimingFunction',
    'startValue',
    'finishValue',
    (fn, s, f) => t => fn(t) * f + fn(1 - t) * s
  ),
  transitionPercentage: MAX_PERCENTAGE,
  equality,
  startValue: oneWay('transitionValue'),
  finishValue: oneWay('transitionValue'),
  inbetweenValue: oneWay('transitionValue'),
  transitionValue: computed({
    set(key, val, oldVal) {
      if (isPresent(val) && isPresent(oldVal) && !this.equality(val, oldVal)) {
        set(this, 'startValue', this.get('inbetweenValue'));
        set(this, 'finishValue', val);
        set(this, 'transitionPercentage', 0);
      }
      return val;
    }
  }),
  transitionTimingFunction: TIMING_FUNCTIONS.easeInOut,
  transitionDuration: 250,
  init(...args) {
    this._super(...args);
    this.pollTask('progressTransition', `slow-motion:${guidFor(this)}#progressTransition`);
  },
  progressTransition(next) {
    const {
      scaledTransitionFunction,
      transitionPercentage,
      percentagePerFrame
    } = this.getProperties(
      'scaledTransitionFunction',
      'transitionPercentage',
      'percentagePerFrame'
    );
    if (!this.get('isDone')) {
      this.set('inbetweenValue', scaledTransitionFunction(transitionPercentage));
      this.incrementProperty('transitionPercentage', percentagePerFrame);
    }
    if (this.get('isError')) {
      Ember.Logger.error(
        '[slow-motion] Encountered an error where the animation was being run backwards for some reason',
        this
      );
    } else {
      this.runTask(next, MS_PER_FRAME);
    }
  }
});
