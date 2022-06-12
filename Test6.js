// Q. Find the nth largest element in a sorted array 

var arr = [5,9,6,8,7,1,3,2];

console.log(arr.sort());

var n = 8; // n could be anything, if its in range then we'll print the result
nthLargestElem(n);

function nthLargestElem(n)
{
	if(n > 0 && n < arr.length + 1){
		let res = arr.length - n;
		console.log(arr[res]);
	}
	else{
		console.log("n is out of range");
	}
}
