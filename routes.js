module.exports = function routes(app) {
	parseRoutes();
	function parseRoutes() {
		for (var i=0; i<app.locals.endpoints.length; i++) {
			var serviceToCreate = app.locals.endpoints[i];
			createService(serviceToCreate);
			console.log('Created: ' + serviceToCreate.url);
		}
	}

	function createService(service) {
		app.get(service.url, function(req, res) {
			var delay = service.delay;
			setTimeout(function(delay) {
				console.log(service.url);
				res.json(service.data);
			}, delay);
		});
	}
}