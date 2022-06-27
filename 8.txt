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