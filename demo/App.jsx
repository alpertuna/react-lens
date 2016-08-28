/*
 * dev/App.js
 * Author: H.Alper Tuna <halpertuna@gmail.com>
 * Date: 21.08.2016
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import Lens from '../src/main.js';

const App = () => (
  <div>
    <h1>React Lens - Demo Page</h1>
    <h3>Currency Filter</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="currency">{7}</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="currency">{7}</Lens>
    </div>
    <hr />
    <h3>Currency Filter with Custom Parameters</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="currency : EUR : 3 : R">{7}</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="currency : EUR : 3 : R">{7}</Lens>
    </div>
    <hr />
    <h3>Uppercase Filter</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="uppercase">{\'tOuPpEr\'}</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="uppercase">{'tOuPpEr'}</Lens>
    </div>
    <hr />
    <h3>Lowercase Filter</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="lowercase">{\'tOlOwEr\'}</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="lowercase">{'tOlOwEr'}</Lens>
    </div>
    <hr />
    <h3>Date Filter</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="date">{ new Date() }</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="date">{ new Date() }</Lens>
    </div>
    <hr />
    <h3>Date Filter with Custom Format</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="date : d-m-yyyy">{ new Date() }</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="date : d-m-yyyy">{ new Date() }</Lens>
    </div>
    <hr />
    <h3>Json filter</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="json">{{ "json": 1, "data": 2 }}</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="json">{{ json: 1, data: 2 }}</Lens>
    </div>
    <hr />
    <h3>Chained filters</h3>
    <pre>
      <code className="xml">
        {'<Lens filter="date : mmmm | uppercase">{ new Date() }</Lens>'}
      </code>
    </pre>
    <div>
      <Lens filter="date : mmmm | uppercase">{ new Date() }</Lens>
    </div>
    <h3>Foreach filter</h3>
    <pre>
      <code className="xml">
        {`<Lens filter="foreach : li" container="ul">
  {[\'Listing items\', \'Using "foreach" filter\']}
</Lens>`}
      </code>
    </pre>
    <div>
      <Lens filter="foreach : li" container="ul">
        {['Listing items', 'Using "foreach" filter']}
      </Lens>
    </div>
  </div>
);

render(<App />, document.getElementById('root'));
