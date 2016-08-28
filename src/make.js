/**
 * src/make.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

import { lenses } from './Lens';

export default (lensName, type, renderer) => {
  let instanceOf = null;
  let inputType = type;
  if (typeof type === 'function') {
    instanceOf = inputType;
    inputType = 'object';
  }
  lenses[lensName] = {
    instanceOf,
    inputType,
    renderer,
  };
};
