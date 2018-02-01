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

		client.search(searchRequest).then(response => {
		  const result = JSON.parse(response.body)
		  console.log(result)
		  res.json(result)
		}).catch(e => {
		  console.log(e);
		});
	}

}
