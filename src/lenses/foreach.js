/**
 * src/lenses/foreach.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

import React from 'react';
import make from '../make';

export default make('foreach', Array, (content, tag = 'li') => (
  content.map((item, i) => (
    React.createElement(tag, { children: item, key: i })
  ))
));
