function g() {
	let arr = [0, 0, 0, 1, 3, 5, 7, 2, 4, 6, 8, 10];
	let n0 = 0;
	let n1 = 0;
	let n2 = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			n0++
		} else if (arr[i] % 2 === 1) {
			n1++
		} else if (arr[i] !== 0 && arr[i] % 2 === 0) {
			n2++
		}
	}
	console.log(`Четных элементов ${n2}, нечетных элементов ${n1}, нулей ${n0}`)
}