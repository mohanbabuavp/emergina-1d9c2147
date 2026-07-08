(function () {
	// Mobile menu toggle
	var btn = document.querySelector('.menu-toggle');
	var menu = document.getElementById('mobile-menu');
	if (btn && menu) {
		btn.addEventListener('click', function () {
			var open = menu.classList.toggle('open');
			btn.setAttribute('aria-expanded', open ? 'true' : 'false');
		});
	}

	// Scroll reveal
	var els = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window) {
		var io = new IntersectionObserver(function (entries) {
			entries.forEach(function (e) {
				if (e.isIntersecting) {
					e.target.classList.add('in');
					io.unobserve(e.target);
				}
			});
		}, { threshold: 0.12 });
		els.forEach(function (el) { io.observe(el); });
	} else {
		els.forEach(function (el) { el.classList.add('in'); });
	}
})();
