console.log("Do you think I'm funny? (Y/N)");
process.stdin;
var amIFunny;
process.stdin.on('readable', function() {
    amIFunny = process.stdin.read();
    if (amIFunny === "Y") {
    	console.log("Yeah, me too!");
    	process.exit();
    } else {
    	console.log("Aww, too bad!");
    	process.exit();
    }

});
