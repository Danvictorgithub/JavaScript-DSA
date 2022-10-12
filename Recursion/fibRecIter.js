function fibIter(n) {
	// 0,1,1,2,3,5,8,13 - Test Case
	let fibArray = [0,1];
	for (let i = 0; i < n-2; i++) {
		fibArray.push(fibArray[i]+fibArray[i+1]);
	}
	return fibArray;

}
function fibRec(n, i = 0, fibArray = [0,1]) {
	if (i >= n-2) {
		return;
	}
	else {
		fibArray.push(fibArray[i] + fibArray[i+1]);
		fibRec(n, i+1 ,fibArray);
	}
	return fibArray;
}

function fibTest(fibArray) {
	return (fibArray.join('') == '011235813');
}
function main() {
	// Test for Fib Iter
	// console.log(fibTest(fibIter(8)));
	// console.log(fibIter(8));

	// Test for Fib Rec
	//Bruh, Batak kaayo victor bai. like legit? -- bruh
	console.log(fibTest(fibRec(8)));
	console.log(fibRec(8));
}
main();