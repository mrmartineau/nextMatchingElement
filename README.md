# nextMatchingElement
## Find the next matching sibling element in the DOM

[![npm version](https://badge.fury.io/js/nextmatchingelement.svg)](http://badge.fury.io/js/nextmatchingelement) <br>
[![NPM](https://nodei.co/npm/nextmatchingelement.png?downloads=true)](https://nodei.co/npm/nextmatchingelement/)

### NPM
`npm install nextmatchingelement --save`

### Usage
#### With Commonjs/Browserify/Webpack

```js
var nextEl = require('nextmatchingelement');

nextEl(el, target, callback);
```

### Parameters
#### el
`el` is the starting element, from which the sibling will be found.

#### target
`target` is the target element you'd like to select

#### callback
`callback` is the callback function you'd like to run once the target element has been found. It takes one argument which is a DOM node of the [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling) found.

### Example usage
#### With HTML like this

```html
	<h3 class="findNext"></h3>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit dolore commodi, et fuga quas.</p>
	<div class="demo">
		Foo
	</div>
```

#### Use JS like this
```js
var findNext = document.querySelector('.findNext');
nextEl(findNext, 'demo', function (target) {
	target.classList.toggle('show-code');
});
```