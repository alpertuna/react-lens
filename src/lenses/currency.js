/**
 * src/lenses/currency.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

import make from '../make';

export default make('currency', 'number', (content, sign = '$', pad = 2, direction = 'L') => {
  let result = '';
  if (direction === 'L') result += `${sign} `;
  result += parseFloat(content).toFixed(pad);
  if (direction === 'R') result += ` ${sign}`;
  return result;
});
