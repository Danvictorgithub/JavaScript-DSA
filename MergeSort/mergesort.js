function mergesort(array) {
	if (array.length == 1) {
		return array;
	} else {
		let divider = array.length / 2;
		const leftarray = mergesort(array.slice(0,divider));
		const rightarray = mergesort(array.slice(divider,array.length));
		console.log("left",leftarray);
		console.log("right",rightarray);
		if (leftarray > rightarray) {
			console.log("compare","left",leftarray,"right",rightarray);	
			array = rightarray.concat(leftarray);
			console.log("return",array,"\n");
			return array;
		} else {
			console.log("compare","left",leftarray,"right",rightarray);
			array = leftarray.concat(rightarray);
			console.log("return",array,"\n");
			return array;
		}
	}
}
let array = [5,1,3,4];
let divider = array.length/2;
let leftarray = array.slice(0,divider);
let rightarray = array.slice(divider,array.length);
// console.log(rightarray);

console.log("result",array);
// let leftarray = array.slice(0,1);
// let rightarray = array.slice(1,2);


// [5,1,3,4]
// [5,1] [3,4]
// [5] [1] [3] [4]
// [5] > [1] [3] > [4]
// [1,5] [3,4]

// [3,4,1,5]
// [3,4] [1,5]

// let mixedarray = leftarray.concat(rightarray);
// console.log(mergesort(array));

