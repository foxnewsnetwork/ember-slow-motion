import bezier from '../utils/bezier';

export default {
  easeInOut: bezier(0.42, 0, 0.58, 1),
  linear: bezier(0, 0, 1, 1),
  ease: bezier(0.25, 0.1, 0.25, 1),
  easeIn: bezier(0.42, 0, 1, 1),
  easeOut: bezier(0, 0, 0.58, 1),
};
