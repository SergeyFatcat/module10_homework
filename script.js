function a() {
	let userNumber = +prompt("Введите число");
	if (isNaN(userNumber)) {
		alert("Упс, кажется Вы ошиблись");
	} else if (userNumber % 2 === 0) {
		alert("Число четное");
	} else {
		alert("Число нечетное");
	}
};


function b() {
	let userData;
	switch (typeof userData) {
		case 'number':
			alert("Вы ввели число");
			break;
		case 'string':
			alert("Вы ввели строку");
			break;
		case 'boolean':
			alert("Вы ввели булево значение");
			break;
		default:
			alert("Данные не определены" + " " + typeof userData);
	}
}

function c() {
	let str;
	let strToArr = str.split("");
	let strToArrRev = strToArr.reverse();
	let strRev = strToArrRev.join("");
	console.log(strRev)
}

function d() {
	let num = Math.random();
	let num100 = num * 100;
	ranNam = Math.floor(num100);
	console.log(ranNam);
}


function e() {
	let arr;
	arr = [1, "a", 2, "b", 3, "c"];
	console.log("Длина массива " + arr.length);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i]);
	}
}

function f() {
	let arr;
	let result
	arr = [1, "a", 2, "b", 3, "c"];
	sortArr = arr.sort();
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			result = "Yes";
			return result;
		} else {
			result = "No";
			return result;
		}
		/*console.log(sortArr);
		console.log(arr[i]);
		console.log(arr[i + 1])
		console.log(result);*/
	}
}

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

function i() {
	let map;
	map = new Map([

		["apple", "green"],

		["strawberry", "red"],

		["blueberry", "blue"]

	]);
	for (let k of map.keys()) {
		console.log(`ключь ${k} значение ${map.get('k')}`)
	}

}
