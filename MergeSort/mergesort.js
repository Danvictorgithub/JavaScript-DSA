function insertionSort(array){
	let sortedarray = [];
	let length = array.length;
	for (let i = 0; i < length;i++) {
		let min = Math.min(...array);
		sortedarray.push(min);
		array.splice(array.indexOf(min),1);
	}
	return sortedarray;
}
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
			array = insertionSort(rightarray.concat(leftarray));

			console.log("return",array,"\n");
			return array;
		} else {
			console.log("compare","left",leftarray,"right",rightarray);
			array = insertionSort(leftarray.concat(rightarray));
			console.log("return",array,"\n");
			return array;
		}
	}
}
let array = [5,1,3,4,5,6,8];
// console.log(array.indexOf(5));
// let divider = array.length/2;
// let leftarray = array.slice(0,divider);
// let rightarray = array.slice(divider,array.length);
// console.log(rightarray);

// console.log(insertionSort(array));
console.log("start array:",array,"result",mergesort(array));
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

