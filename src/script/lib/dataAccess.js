const dataAccess = (function() {
	const fetchEngines = () => {
		fetch('./data/engines.json')
			.then(response => response.json())
			.then(data => carUI.showEngines(data))
			.catch(err => console.error(`An error occured, ${err}`));
	};
	return {
		fetchEngines: fetchEngines
	};
})();
