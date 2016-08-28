/**
 * src/lenses/uppercase.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

import make from '../make';

export default make('uppercase', 'string', content => `${content}`.toUpperCase());
