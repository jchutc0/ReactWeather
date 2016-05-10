//	var names = ['John', 'Joseph', 'Jingleheimer-Schmidtt'];
//	
//	names.forEach(function(name){
//		console.log('forEach', name);
//	});
//	
//	
//	names.forEach((name) => {
//		console.log('arrowFunc', name);
//	});
//	
//	names.forEach((name) => console.log('arrowFun2', name));
//	
//	var returnMe = (name) => name + '!';
//	console.log(returnMe('Casey'));

function add(a, b) {
	return a+b;
}

var add1 = (a, b) => a + b;

var add2 = (a, b) => {
	return a + b;
}

console.log(add(1,3));
console.log(add(9,0));
console.log(add1(1,3));
console.log(add1(9,0));
console.log(add2(1,3));
console.log(add2(9,0));

