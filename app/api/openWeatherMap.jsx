var axios = require('axios');

// http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c7d3a092ed7716f60fe0009c61ead247&units=imperial
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?APPID=c7d3a092ed7716f60fe0009c61ead247&units=imperial';

module.exports = {
		getTemp: function(location) {
			var encodedLocation = encodeURIComponent(location);
			var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

			return axios.get(requestUrl).then(function(res) {
				if(res.data.cod && res.data.message) {
					throw new Error(res.data.message);
				} else {
					return res.data.main.temp;
				}
			}, function(res) {
				throw new Error(res.data.message);
			});
		}
}

