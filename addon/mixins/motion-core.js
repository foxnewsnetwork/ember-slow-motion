import Ember from 'ember';
import {call} from '../utils/computed';
import TIMING_FUNCTIONS from '../constants/timing-functions';
import assert from '../utils/assert';
import bezier from '../utils/bezier';

const {
  computed: {lt, oneWay, gte},
  String: {camelize},
  computed,
  isPresent,
  setProperties,
  typeOf,
  getWithDefault,
} = Ember;

export const MS_PER_FRAME = 1000 / 60;
export const MAX_PERCENTAGE = 1;
export const PERCENTAGE_PER_TRANSITION = MAX_PERCENTAGE;
export const equality = (x, y) => x === y;

const TIMING_FUNCTION_PARSERS = {
  string(name) {
    return getWithDefault(
      TIMING_FUNCTIONS,
      camelize(name),
      TIMING_FUNCTIONS.easeInOut,
    );
  },
  function: fn => fn,
  array(xs) {
    assert(
      get(xs, 'length') === 4,
      '[motion-core] a 4 array of numbers that are the coefficients of a cubic bezier, instead you gave me',
      xs,
    );
    return bezier.apply(null, xs);
  },
  default(whatever) {
    assert(
      false,
      '[motion-core] unable to parse',
      whatever,
      'into a known timing function',
    );
  },
};

function parseTimingFunction(x) {
  return getWithDefault(
    TIMING_FUNCTION_PARSERS,
    typeOf(x),
    TIMING_FUNCTION_PARSERS.default,
  )(x);
}

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
  parsedTransitionTimingFunction: call(
    'transitionTimingFunction',
    parseTimingFunction,
  ),
  transitionTimingFunction: TIMING_FUNCTIONS.easeInOut,
  transitionDuration: 250,
});
