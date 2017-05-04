import Ember from 'ember';
import {call} from '../utils/computed';
import TIMING_FUNCTIONS from '../constants/timing-functions';

const {
  computed: {lt, oneWay, gte},
  computed,
  isPresent,
  setProperties,
} = Ember;

export const MS_PER_FRAME = 1000 / 60;
export const MAX_PERCENTAGE = 1;
export const PERCENTAGE_PER_TRANSITION = MAX_PERCENTAGE;
export const equality = (x, y) => x === y;

export default Ember.Mixin.create({
  isDone: gte('transitionPercentage', MAX_PERCENTAGE),
  isError: lt('transitionPercentage', 0),
  framesPerTransition: call(
    'transitionDuration',
    totalMS => totalMS / MS_PER_FRAME,
  ),
  percentagePerFrame: call(
    'framesPerTransition',
    fpt => PERCENTAGE_PER_TRANSITION / fpt,
  ),
  scaledTransitionFunction: call(
    'transitionTimingFunction',
    'startValue',
    'finishValue',
    (fn, s, f) => t => fn(t) * f + fn(1 - t) * s,
  ),
  transitionPercentage: MAX_PERCENTAGE,
  equality,
  startValue: oneWay('transitionValue'),
  finishValue: oneWay('transitionValue'),
  inbetweenValue: oneWay('transitionValue'),
  transitionValue: computed({
    set(key, val, oldVal) {
      if (isPresent(val) && isPresent(oldVal) && !this.equality(val, oldVal)) {
        setProperties(this, {
          startValue: this.get('inbetweenValue'),
          finishValue: val,
          transitionPercentage: 0,
        });
      }
      return val;
    },
  }),
  transitionTimingFunction: TIMING_FUNCTIONS.easeInOut,
  transitionDuration: 250,
});
