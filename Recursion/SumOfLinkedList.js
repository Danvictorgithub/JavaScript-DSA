let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

function sumOfLinkedList(linkedList) {
	let count = 0;
	try {
		count += linkedList.value + sumOfLinkedList(linkedList.next);
		console.log(count);
	}
	catch {
		return 0;
	}
	return count;
}
console.log(sumOfLinkedList(list));