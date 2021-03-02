(function() {
	let d = document;

	function init() {
		//Links 
		
		let contactLink  = d.getElementById('contactLink');
		
		//Anchors
		
		let contact      = d.getElementById('contact');
		
		contactLink.addEventListener('click', (e) => { scrollTo(contact, e) }, false);
		
		console.log(contact); //DEBUG
		console.log('contact: '+scrollTopValue(contact)+' / '+offsetTopValue(contact)); //DEBUG
		
		console.log('App loaded. Have fun!');
	}
	
	function scrollTopValue(domElement) { //DEBUG
		return 'scrollTopValue:', domElement.scrollTop;
	}
	function offsetTopValue(domElement) { //DEBUG
		return 'offsetTopValue:', domElement.offsetTop;
	}

	var requestAnimFrame = (function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
			window.setTimeout(callback, 1000 / 60);
		};
	})();

	function scrollTo(to, callback, duration = 1500) { 
		
		if (isDomElement(to)) {
			
			to = to.offsetTop;
		}
		
		function move(amount) {
			
			document.documentElement.scrollTop = amount;
			document.body.parentNode.scrollTop = amount;
			document.body.scrollTop = amount;
		}

		function position() {
			return document.documentElement.offsetTop || document.body.parentNode.offsetTop || document.body.offsetTop;
		}
		
		var start = position(),
			change = to - start,
			currentTime = 0,
			increment = 20;
		console.log('start:', start); //DEBUG
		console.log('to:', to); //DEBUG
		console.log('change:', change); //DEBUG
		
		var animateScroll = function() {
			// increment the time
			currentTime += increment;
			// find the value with the quadratic in-out easing function
			var val = Math.easeInOutQuad(currentTime, start, change, duration);
			// move the document.body
			move(val);
			// do the animation unless its over
			if (currentTime < duration) {
				requestAnimFrame(animateScroll);
			}
			else {
				if (callback && typeof(callback) === 'function') {
					// the animation is done so lets callback
					callback();
				}
			}
		};
		
		animateScroll();
	}

	init();
})();


Math.easeInOutQuad = function(t, b, c, d) {
	t /= d / 2;
	if (t < 1) {
		return c / 2 * t * t + b
	}
	t--;
	return -c / 2 * (t * (t - 2) - 1) + b;
};

Math.easeInCubic = function(t, b, c, d) {
	var tc = (t /= d) * t * t;
	return b + c * (tc);
};

Math.inOutQuintic = function(t, b, c, d) {
	var ts = (t /= d) * t,
		tc = ts * t;
	return b + c * (6 * tc * ts + -15 * ts * ts + 10 * tc);
};

function isDomElement(obj) {
    return obj instanceof Element;
}

function isMouseEvent(obj) {
    return obj instanceof MouseEvent;
}

function findScrollingElement(element) { //FIXME Test this too
	do {
		if (element.clientHeight < element.scrollHeight || element.clientWidth < element.scrollWidth) {
			return element;
		}
	} while (element = element.parentNode);
}