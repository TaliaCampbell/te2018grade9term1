const READLINE = require("readline-sync");

// **** Problem 1: R-rated ****
// You cannot see an R-rated movie unless you are at least 18, or you are with
// an adult. Write code that prints whether or not someone can see an
// R-rated movie.
console.log("*** Problem 1: R-rated ***");
let age = READLINE.question("Enter your age: ");
let withAdult = READLINE.question("Are you with an adult? (yes or no): ");

if(age>=18 || withAdult == "yes"){
		console.log("Congrats you can see the movie!")
}
else { 
	console.log("Sorry, you cannot see this movie.");
}

// **** Problem 2: Umbrella ****
// You should bring an umbrella when you travel, but only if it is raining.
// However, if it is thunderstorming, you should not bring an umbrella since
// that's bad luck. Write code that prints if someone should bring an umbrella
// with them.
console.log("*** Problem 2: Umbrella ***");
let raining = READLINE.question("Is it raining? (yes or no): ");
if(raining==yes); {
	console.log("You can bring an umbrella!");  4 
}
else {
	console.log("You don't need an umbrella right now");
}
let thunderstorming = READLINE.question("Is it thunderstorming? (yes or no): ");\
	if(thunderstorming==yes); {
		console.log("Don't bring an umbrella it's bad luck!")
	}
	else{
		console.log("Go ahead, bring your umbrella.");
	}

// **** Problem 3: Monkey Trouble ****
// There are two monkeys: Bubbles and Spankey. You are in trouble if both of
// them are smiling, or if neither are smiling. Write code that prints if we
// are in trouble.
console.log("*** Problem 3: Monkey Trouble ***");
let bubbles = READLINE.question("Is Bubbles smiling? (yes or no): ");
if(bubbles=="yes" && spankey == "yes" || bubbles == "no" && spankey == "no") {
	console.log("You are in trouble Uh oh!!");
}
else {
	console.log("You are not in trouble whew");

}



// **** Problem 4: First Place ****
// Write code that prints the largest of three scores. If there is a tie for
// first place, simply print one of the tie winners.
console.log("*** Problem 4: First Place ***");
let score1 = READLINE.question("Enter the first score: ");
let score2 = READLINE.question("Enter the second score: ");
let score3 = READLINE.question("Enter the third score: ");

if(score1 > score3 && score  > score2) {
	console.log(score1);
}
else if (score2 > score1 && score2 > score3) {
	console.log(score2);
}
else if(score3 > score1 && score3 > score2){
	console.log(score3);
}
// **** Problem 5: Phone Shopping ****
// At a phone store, you can afford various "tiers" of phones based on how
// much money you have.
//    If you have at least $30 you can buy a prepaid phone.
//    If you have at least $100 you can buy a bottom-tier phone.
//    If you have at least $300 you can buy a middle-tier phone.
//    If you have at least $600 you can buy a top-tier phone.
// Write code that prints all the phone tiers someone can buy based on how much
// money they have.
console.log("*** Problem 5: Phone Shopping ***");
let money = READLINE.question("How much money do you have?: ");

if(money >= 30) {
		console.log("You can buy a prepaid  phone!");
}
else if(money >= 100){
	console.log("You can buy a prepaid phone or a or bottom-tier phone!");
}
else if(money >= 300) {
		console.log ("You can buy a prepaid phone, bottom-tier phone, or a middle-tier phone!");
}
else if (money >= 600){
	console.log("You can buy a prepaid phone, bottom-tier phone, middle-tier phone, or a top-tier phone!")
}


// **** Problem 6: Guess My Number ****
// Write code that plays a simple number guessing game with a user. You can
// use any number you like as myNum. If the user guesses the number, print
// a congratulations message. If they guess too low or too high, tell them this.
// If their guess is myNum +/- 3, tell them they are "warm"; otherwise tell
// them they are cold.
console.log("*** Problem 6: Guess My Number ***");
let myNum = 5;
let guess = READLINE.question("I'm thinking of a number. Guess it: ");
const READLINE =require("readline-sync")

let wantsToDrink = READLINE.question( "You're at a party and want to drink") 
if(wantsToDrink == 'yes') {

let age = READLINE.question("Please enter your age: ");
		if(age <= 21) {
			console.log(Congrats! You can drink alcohol!);
		}
		else {

			console.log("Sorry. It's illegal to drink alcohol for you")
			
		}

		





