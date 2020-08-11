(function() {
	document.addEventListener('DOMContentLoaded', function() {
		carUI.setupCarApp({
			pageHolderClass: '.js-page',
			carImageHolderClass: '.js-image',
			specsHolderClass: '.js-specs',
			dealHolderClass: '.js-deal',
			goBackHolderClass: '.js-back',
			nameHolderClass: '.js-title',
			powerHolderClass: '.js-power',
			accelerationHolderClass: '.js-acceleration',
			speedHolderClass: '.js-speed'
		});
		carUI.enableListeners();
		dataAccess.fetchEngines();
		carUI.showEngines();
	});
})();
