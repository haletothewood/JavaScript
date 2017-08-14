console.log("I will now ask you for your age.");
process.stdin;
var Age;
process.stdin.on('readable', function() {
    Age = process.stdin.read();
    if (Age !== null) {
        console.log("Wow, " + Age + "You look great for your age!");
        var EarlyYears = (2*10.5);
		var LaterYears = (Age - 2) * 4;
		var MyAgeInDogYears = EarlyYears + LaterYears;

		console.log("Did you know if you were a dog you'd be " + MyAgeInDogYears)
		process.exit();
    }

});
