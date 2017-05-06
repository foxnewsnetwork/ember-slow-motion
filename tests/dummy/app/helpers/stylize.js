import Ember from 'ember';

const { get, String: { htmlSafe } } = Ember;

function reduceHash(hashMap, fn, initVal) {
  for (let key in hashMap) {
    const val = get(hashMap, key);
    initVal = fn(initVal, key, val);
  }
  return initVal;
}

export function stylize(params, hash) {
  return htmlSafe(
    reduceHash(hash, (output, styleProp, styleVal) => `${output}\n${styleProp}: ${styleVal};`, '')
  );
}

export default Ember.Helper.helper(stylize);
