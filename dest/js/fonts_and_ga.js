'use strict';

function toHeader(d, name, properties){
	var el = d.createElement(name);

	for (var key in properties) {
		el[key] = properties[key];
	}

	d.head.appendChild(el);
}

window.addEventListener("load", function(event) {
	toHeader(document, 'link', {
		href: '//fonts.googleapis.com/css?family=Open+Sans:400,700',
		rel: 'stylesheet'
	});
	toHeader(document, 'script', {
		src: 'http://www.google-analytics.com/analytics.js'
	});

	(function(w,g){w['GoogleAnalyticsObject']=g;
	 w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

	 // Optional TODO: replace with your Google Analytics profile ID.
	 ga('create', 'UA-XXXX-Y');
	 ga('send', 'pageview');
});
