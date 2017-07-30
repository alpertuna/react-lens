/**
 * src/Lens.jsx
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 28.08.2016
 */

import React from 'react';
import PropTypes from 'prop-types';

const lenses = {};

export {
  lenses,
};

const Lens = props => {
  let content = props.children;
  const container = typeof props.container === 'undefined'
    ? 'span'
    : props.container;

  if (props.filter) {
    props.filter.replace(/\s/g, '').split('|').forEach(filter => {
      const parameters = filter.split(':');
      const lens = parameters[0];

      if (typeof lenses[lens] === 'undefined') {
        throw new Error(`Lens "${lens}" is not found.`);
      }

      const inputType = lenses[lens].inputType;
      const instanceOf = lenses[lens].instanceOf;
      parameters[0] = content;

      if (typeof content === inputType) {
        if (instanceOf === null || content instanceof instanceOf) {
          content = lenses[lens].renderer.apply(null, parameters);
        } else {
          let funcStr = instanceOf.toString();
          funcStr = funcStr.substring('function '.length, funcStr.indexOf('('));
          throw new Error(`Invalid value for Lens. Expected instance of "${funcStr}".`);
        }
      } else {
        throw new Error(
          `Invalid value for Lens. Expected "${inputType}", got "${typeof content}" instead.`
        );
      }
    });
  }
  const clonedProps = Object.assign({}, props);
  delete clonedProps.container;
  delete clonedProps.content;
  return React.createElement(container, Object.assign(
    {},
    clonedProps,
    { children: content }
  ));
};

Lens.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  container: PropTypes.string,
  filter: PropTypes.string,
};

export default Lens;
