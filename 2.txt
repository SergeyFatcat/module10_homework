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