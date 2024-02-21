function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort(function (a,b) {return a-b});

	totalCost=0;

	while (arr.length >= 2) {

		let rope1 = arr.shift();
		let rope2 = arr.shift();

		let combinedLength = rope1+rope2;

		totalCost + = combinedLength;

		arr.push(combinedLength);
       arr.sort(function (a,b) {return a-b});
		
	}
		
	return totalCost;
  
}

module.exports=mincost;
