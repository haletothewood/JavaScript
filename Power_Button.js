var calculatorOn = false

function pressPowerButton() {
	if (calculatorOn) {
	console.log("Calculator turning off.");
	calculatorOn = false;
	} else {
	console.log("Calculator turning on.");
	calculatorOn = true;
	}
}

pressPowerButton()
pressPowerButton()