function f() {
	let arr;
	let result
	arr = [1, "a", 2, "b", 3, "c"];
	sortArr = arr.sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			result = true;
			return result;
		} else {
			result = false;
			return result;
		}
	}
}