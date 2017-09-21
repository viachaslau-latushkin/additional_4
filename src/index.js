module.exports = function multiply(first, second) {
	first = first.toString().split("").map(Number).reverse();
	second = second.toString().split("").map(Number).reverse();
	
	var result = Array.from(first).concat(Array.from(second)).fill(0);
	for (var i = 0; i < first.length; i++)
		for (var j = 0; j < second.length; j++)
			result[i+j] = result[i+j] + first[i] * second[j];
	
	for (i = 0; i < result.length-1; i++) {
		result[i+1] = result[i+1] + Math.floor(result[i] / 10);
		result[i] = result[i] % 10;
	}
	result.reverse();
	
	while(result[0] === 0) 
		result.shift();
	return result.join("") || "0";
}