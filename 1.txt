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