# react-lens
Angular like simple and quick data filter / formatter to show for React.

react-lens is under development now, It is time to contribute :blush:

Demo
====
Here is a simple demo for collections of built-in lenses. [Go To Demo](https://alpertuna.github.io/react-lens/)

Install
=======

```sh
npm install react-lens
```

Usage / Example
=============

With Ecma Script 6 and React Loaders
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Lens from 'react-lens';

const Example = props => (
  <div>
    <Lens filter="currency">{5.2}</Lens>
  </div>
);

ReactDOM.render(<Example />, document.getElementById('dom_id'));
```

It will print `$ 5.20` without any customizations.
For more examples [go to demo page](https://alpertuna.github.io/react-lens/).

Build-in Lenses (Filters)
=========================
- `currency` Formats number to show as currency
- `date` Formats date
- `json` Stringifies objects
- `lowercase` Makes string lower case
- `uppercase` Makes string upper case
- `foreach` Divides given array in to elements

Development / Contributing
==========================
If you like to add or improve something, follow these steps.

```sh
# Change dir to your playground folder and clone repository.
git clone git@github.com:alpertuna/react-lens.git

# Enter cloned folder and install necessary development node libraries
cd react-lens
npm install
```

#### Folders and Files
 - **`src`** folder keeps all source files of `react-lens`
 - **`demo`** is playground folder to develop `react-lens`.

Under **`demo`** folder, `index.html` is index file of our web server. You don't need to touch here if you don't want to add any other external js or css files.
`App.js` file is entry point for our react application, and you can test your alterations in here. There is a working example in `App.js` and it imports `react-lens` directly from source code, that's why there is no need to build it while developing.

#### To run dev server,
```sh
npm start
```
And open `localhost:8080` in browser.
Dev server uses webpack and it has hot modul replecament plugins, so when you change and save any source file, it will rebuild virtual bundle and send signal browser to refresh page automaticly.

#### Source Code Writing Standarts
For source code quality, I applied Airbnb rules.

#### Other scripts,
```sh
# Builds js dist file
npm run build-dist-js

# Builds minified js dist file
npm run build-dist-js-min

# Builds all dist files
npm run build-dist

# Lints js files according to Airbnb rules using Eslint
npm run lint-confs
npm run lint-src
npm run lint-demo

# Runs all necessary test scripts
npm test
```
