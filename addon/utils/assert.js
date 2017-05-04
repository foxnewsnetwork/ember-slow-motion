import Ember from 'ember';

export default function assert(testBool, ...args) {
  if (testBool) {
    return;
  } else {
    Ember.Logger.error(...args);
    throw new Error('assertion failed see above logged error^');
  }
}
