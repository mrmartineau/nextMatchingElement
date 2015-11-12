function nextMatchingElement(el, target, callback) {
	var nextEl = el.nextElementSibling;
	target = target;
	this.callback = callback;

	if ( nextEl.classList.contains(target) ) {
		if (typeof callback == "function") {
			return callback(nextEl);
		}

	} else {
		return nextMatchingElement(nextEl, target, callback);
	}
}

// Check for AMD/Module support, otherwise define nextMatchingElement as a global variable.
if (typeof define !== 'undefined' && define.amd) {
	// AMD. Register as an anonymous module.
	define (function() {
		'use strict';
		return nextMatchingElement;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = nextMatchingElement;
} else {
	window.nextMatchingElement = nextMatchingElement;
}