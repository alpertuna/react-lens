[![Build Status](https://travis-ci.org/alpertuna/react-lens.svg?branch=master)](https://travis-ci.org/alpertuna/react-lens)
[![dependencies Status](https://david-dm.org/alpertuna/react-lens/status.svg)](https://david-dm.org/alpertuna/react-lens)
[![peerDependencies Status](https://david-dm.org/alpertuna/react-lens/peer-status.svg)](https://david-dm.org/alpertuna/react-lens?type=peer)

[![NPM](https://nodei.co/npm/react-lens.png?compact=true)](https://nodei.co/npm/react-lens/)

# react-lens
Angular like simple and quick data filter / formatter to show for React.

> `react-lens` is under development now, It is time to contribute :blush:.
>
> If you have created your own lens and you think it is useful that should be built-in lens, then open pull-request now :zap:.

Table of Content
================
- [Demos](#demos)
- [Install](#install)
- [Usage / Example](#usage--example)
- [Properties](#properties)
- [Built-in Lenses (Filters)](#built-in-lenses-filters)
- [Making New Lenses (Filters)](#making-new-lenses-filters)
  - [Importing make](#importing-make)
  - [make Function Interface](#make-function-interface)
  - [renderer Callback Interface](#renderer-callback-interface)
  - [An Example to Create Lens - repeater](#an-example-to-create-lens---repeater)
- [Development / Contributing](#development--contributing)
  - [Folders and Files](#folders-and-files)
  - [To run dev server,](#to-run-dev-server)
  - [Source Code Writing Standarts](#source-code-writing-standarts)
  - [Other Scripts](#other-scripts)

Demos
=====
Here is a simple demo for collections of built-in lenses. [Go to demo page](https://alpertuna.github.io/react-lens/).

Install
=======

```sh
npm install react-lens
```

Usage / Example
===============

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

Properties
==========
- `container` specifies return element tag of `<Lens />`. Default is `span`.
- `filter` selects which lens will be used to filter / format given value.

Built-in Lenses (Filters)
=========================
- `currency` Formats number to show as currency. Parameters;
  1.  Currency symbol. Default is `$`.
  2.  Specifies number of decimals. Default is `2`.
  3.  Direction of currency symbol. Options are `R` and `L`. Default is `L`.


- `date` Formats date. Parameters;
  1. Date format. For formatting [dateformat](https://www.npmjs.com/package/dateformat) npm package is used. Default is `dd.mm.yyyy`.


- `json` Stringifies objects

- `lowercase` Makes string lower case

- `uppercase` Makes string upper case

- `foreach` Divides given array in to elements. Parameters;
  1. Child element tag.


Making New Lenses (Filters)
===========================
You can jump directly to [An Example to Create Lens - repeater](#an-example-to-create-lens---repeater) instead of reading API.

Or you can look into [src/lenses](https://github.com/alpertuna/react-lens/tree/master/src/lenses) - built-in lenses.

### Importing `make`

```javascript
import { make } from 'react-lens';
```

### `make` Function Interface

> make (lensName: string, **inputType**: string, **rendererCallbackFunction**: function): void

- `lensName` is lens / filter name to use as `filter` props of `<Lens />` instance.
- `inputType` is type of child that will be given through `<Lens />`.
- `renderer` is called when that filter is used and the child is given as parameter.

### `renderer` Callback Interface

> **rendererCallbackFunction** (content: &lt;**inputType**&gt;, param1: string, param2: string ,...): string | number | React.Component | Array&lt;React.Component&gt;

- `content` is content to filter / format given as child through `<Lens />`.
- Other repeatable parameters comes from `filter` props of `<Lens />`. For example;

  ```javascript
  <Lens filter="yourfilter : param1 : param2">{content}</Lens>
  ```

### An Example to Create Lens - `repeater`

Let's make a filter that repeats given content given param times.

```javascript
// File: lens-repeater.js
import { make } from 'react-lens';

make('repeater', 'string', (content, times = 2) => {
  let result = '';
  for(let i = 0; i < times; i++) {
    result += content;
  }
  return result;
});
```
```javascript
// File: example.js
import React form 'react';
import ReactDOM form 'react-dom';
import Lens from 'react-lens';
import './lens-repeater';

ReactDOM.render(
  <div>
    <h3>Repeater Lens Example</h3>
    <Lens filter="repeater : 3">Hello</Lens>
  </div>,
  document.getElementById('dom_id')
);
```
It will prompt "HelloHelloHello".

By the way, have to say that, in `example.js` we imported `./lens-repeater`. You don't have to import our lenses in each file which you use that lens. It's enough to import once in any parent or root file.

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

#### Other Scripts
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
