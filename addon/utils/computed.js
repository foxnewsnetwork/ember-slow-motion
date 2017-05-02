import Ember from 'ember';

const { computed, get } = Ember;

export function call(...args) {
  const keys = args.slice(0, -1);
  const fn = args[args.length - 1];

  return computed(...keys, function() {
    const values = keys.map((key) => get(this, key));
    return fn(...values);
  }).readOnly();
}

const atIndex = (i) => (array) => get(array, i.toString());
const zipWith = ([array, ...arrays], fn) => array.map((x, i) => fn(x, ...arrays.map(atIndex(i))));

/**
 * The zip function literates over all the arrays you give it
 * @param {[...String, function]} args
 */
export function zip(...args) {
  const arrayKeys = args.slice(0, -1);
  const zipFn = args[args.length - 1];

  return computed(...arrayKeys, function() {
    const arrays = arrayKeys.map((key) => get(this, key));
    return zipWith(arrays, zipFn);
  }).readOnly();
}
