const READLINE = require("readline-sync")

console.log('****************************************');
console.log("Welcome Home! Let's ask some questions.")
console.log('****************************************');
let day = READLINE.question("Did you have a good day?");
if(day == "yes"){
	console.log("Good")
}
else {
	console.log("Oh, that doesn't sound good...Let's talk about that later :)")
}

let hw = READLINE.question("Did you do your homework?");
if(hw == "yes"){
	console.log("Good good, keep up the productiveness! :D");
}
else {
	console.log("You are just looking for trouble..GO DO IT NOW!!");
}

let feedTheAnimals = READLINE.question("Did you feed the pets?");
if(feedTheAnimals == "yes"){
	console.log("Wonderful, they will live after all haha.")
}
else {
	console.log("Don't come crying to me when they are dead.")
}

let didYouPrepareForTheNextDay = READLINE.question("Are you prepared for the next day?")
if(didYouPrepareForTheNextDay == "yes"){
	console.log("Great now get ready for bed.")
}
else { 
	console.log("Go get yourself prepared...")
}

console.log('****************************************');
console.log("Bye for now, thanks for using the Parent Bot");
console.log('****************************************');