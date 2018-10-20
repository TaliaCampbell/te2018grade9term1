// import readline-sync module, don't touch
const READLINE = require("readline-sync");

let changeMachine = {
	inputCents: undefined,
	quarters: undefined,
	nickles: undefined,
	dimes: undefined,
	pennies: undefined,
	greeting: "Welcome! Please enter the amount of coins!: "
	farewell: "Thank you, come again"
};
changeMachine.inputCents = READLINE.question(changeMachine.greeting)

let cents = changeMachine.inputCents;

let quarters = Math.floor(cents/25);
let remainder = cents%25;
let dimes = Math.floor(remainder / 10); 
remainder = remainder % 10;
let nickles = Math.floor(remainder / 5);
remainder = remainder % 5;
let pennies = remainder / 1;

changeMachine.quarters = quarters;
changeMachine.dimes = dimes; 
changeMachine.nickles = nickles; 
changeMachine.pennies = pennies;

console.log(`${changeMachine.inputCents} makes: 
	${changeMachine.quarters} quarters
	${changeMachine.nickles} nickles
	${changeMachine.pennies} pennies
	${changeMachine.dimes} dimes



















