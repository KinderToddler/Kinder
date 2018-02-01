'use strict';

const yelp = require('yelp-fusion');

const apiKey = 'e-qrebuGFws2k-_yOIl5TVZ4isFusbqkhb5UV9NIkRbjHOnE6SSFrw7Vz9YLU3fQFMEt_NbYeY-RrugYVCOC-FQQ-uYn4a7rc-Dfwh6WSn7vRVoHoVAPf5eXEEpyWnYx';

const client = yelp.client(apiKey);


module.exports = { 


	findPlaygrounds: function(req, res){

		const searchRequest = {
		  term: 'playground',
		  location: req.params.zipcode,
		  limit: 3
		};

		client.search(searchRequest).then(res => {
		  // const firstResult = response.jsonBody.businesses[0];
		  // const prettyJson = JSON.stringify(response, null, 4);
		  console.log(res)
		}).catch(e => {
		  console.log(e);
		});
		const result = JSON.stringify(res, null, 4)

		res.json(res)
	}

}
