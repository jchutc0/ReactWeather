// function getTempCallback (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }
// 
// getTempCallback('Philadelphia', function (err, temp) {
// 		if(err) {
// 			console.log('Error', err);
// 		} else {
// 			console.log('Success', temp);
// 		}
// });
// 
// 
// function getTempPromise(location) {
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			resolve(79);
// 			reject('City not found.');
// 		}, 1000);
// 	});
// }
// 
// getTempPromise('Philadelphia').then(function(temp) {
// 	console.log('promise success', temp);
// }, function(err) {
// 	console.log('promise error', err);
// });

// Challenge Area
// typeof 7 === 'number'
function addPromise(a, b) {
	return new Promise(function(resolve, reject) {
		if((typeof a === 'number') && typeof b === 'number') {
			resolve(a+b);
		}
		reject('One of the variables was not a number!!');
	});
}

addPromise(1, 'a').then(function(result) {
	console.log('Success', result);
}, function(error) {
	console.log('Error', error);
});
