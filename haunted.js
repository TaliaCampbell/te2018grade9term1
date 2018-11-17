//const READLINE = require("readline-sync");

// let player = {
//   name: undefined,
//   courage: 0,
//   intellect: 0,
//   strength: 0,
//   charm: 0,
//   weapon: "fists",
//   item: "flashlight",
// };

// console.log();
// console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
// player.name = READLINE.question("What is your name?: ");

// console.log(`${player.name} stands in front of a spooky haunted house.`);
// console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
// let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
// if(enterHouse == "y" || enterHouse == "yes") {
//   player.courage++;
//   console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
//   // continue the story

// } else {
//   player.intellect++;
//   console.log(`${player.name} decides not to open the door. However...`);
//   // continue the story

// }
// console.log("Thanks for playing!");

// const READLINE = require("readline-sync");
// console.log("⇨⇨⇨Before we start, in order to answer the questions and get the correct response you must say what is in **. What ever is in ** is one of the 2 answers you can choose to get your response.⇦⇦⇦")
// console.log("★Welcome to the famous spooky haunted house. This house has been said to be haunted since 1876. Anyone who entered has never made it out...alive.★");
// let enterHouse = READLINE.question("Do you dare to the house?");
// if(enterHouse == "yes") {
//   console.log("You are officially in side the house, watch out for spiders, they haven’t eaten in a while.");
// }
// else {
//   console.log("No? I don't take no for an answer you are going in anyways.You are officially in side the house, watch out for spiders, they haven’t eaten in a while.")
// }

// let leftRight = READLINE.question("There are two doors, will you enter the left or the right?")
// if(leftRight == "left"){
//   console.log("Congrats you have made it to the next door..Watch your step, there are mouse traps all over the floor. “BOOM” the door behind you slams shut!")
// }

//   let openWalk = READLINE.question("Will you try to **open the door** or will you **walk across** to the next door?")
//   if(openWalk == "walk across"){
//     console.log("You made it across safely but you found the stairs. Will you go upstairs or stay down?")
// }
// if(openWalk == "open the door"){
//   console.log("The door is completely jammed you have no option but to walk across...You made it safe but found a staircase")
// }
  
//   console.log("Woah watch out! There are blood sucking bats what should you do? ")
//   let runFight = READLINE.question("Will you run or fight?")
//   if(runFight == "run" || runFight == "Run"){
//     console.log("Congrats you have made it to the next door..Watch your step, there are mouse traps all over the floor. “BOOM” the door behind you slams shut!")
//   }
// if(runFight == "fight" || runFight == "Fight"){
//     console.log("There were too many baths to fight off, luckily you made it out of the house with bruises and bitemarks. You have failed...")  // let walkOpen READLINE.q
//   }


// if(openWalk == "open the door"){
//   console.log("The door is completely jammed you have no option but to walk across...You made it safe but found a staircase")
// }

  const READLINE = require("readline-sync")
 console.log("★Welcome to the famous spooky haunted house. This house has been said to be haunted since 1876. Anyone who entered has never made it out...alive.★");

let enterHouse = READLINE.question("Will you enter the haunted house?");
if(enterHouse == "yes") {
  console.log("You are officially in side the house, watch out for spiders, they haven’t eaten in a while.");
}
else {
  console.log("No? I don't take no for an answer you are going in anyways. You are officially in side the house, watch out for spiders, they haven’t eaten in a while.")
}
console.log("*****************************************************************")
console.log("There are 2 doors the Red and the Blue door") 
console.log("*****************************************************************")
let whichDoor = READLINE.question("Which door will you enter?")
if(whichDoor == "Red" || whichDoor == "red"){
  console.log("A room full of old dolls? Seem's creepy we should move on to the next door") 
}
else {
  console.log("A room full of spiders?! Get out of their fast and quick before they get to you!")
}
console.log("*****************************************************************")
console.log("Now that we are back in the hallway there are two different doors to enter, the Black room or the White room");
console.log("*****************************************************************")
let blackWhite = READLINE.question("Will you enter the Black room or the White Room");
  if(blackWhite == "Black" || blackWhite == "black"){
    console.log("It is a pitch black room, when you turn on the lights you see a single mirror. On the mirror written in blood states, 'Whever you see is what will be my next victim'. You quickly run out into the hallway");
  }
  else {                                                    
  console.log("As you walk in you squint your eyes to the bright light coming from this room, it is so bright you cannot see anything. Luckily you had sunglasses on you and you were able to see much better. Nothing seemed to be in the room so you walked out.");
}
console.log("*****************************************************************")
console.log("You come across two new doors which seem to have weird patterns on them. One orange door with pink cirles and a purple door with violet stars.")
console.log("*****************************************************************")
let orangePink = READLINE.question("Will you go through the orange or the pink door?");
if(orangePink == "Orange" || "orange"){
  console.log("You walk into the orange door and see a little girl with black hair. You ask her if she is ok and she turns around and jumps onto you. She bites your arm and you scream and hit her off. You run out as fast as you can")
}
if(orangePink == "Pink" || orangePink == "pink"){
  console.log("You walk into the pink door and it is completely empty, until you feel something grab you by the neck and drag you into the room. You try to scream but you cannoy hear yourself for somereason. It almost felt as if you were screaming inside of your head. You fall unconscious and wake up in front of the next two doors.")
}
console.log("*****************************************************************")
console.log("You are in the hallway and you hear a loud screech from downstairs, you immediately feel unsafe. You are too scared to check it out so you chose one of the doors for safety.")
console.log("*****************************************************************")
let twoDoors = READLINE.question("Will you chose the Yellow door or the Cyan door?")
if(twoDoors == "Yellow" ||twoDoors == "yellow"){
  console.log("When you walk into the room you see a little lady, she tell you that you have awaken the evil spirits and they are after you. You go back into the hallway in fear.")
}
if(twoDoors == "Cyan" || "cyan") {
  console.log("When you walk into the room a huge blast of air knocks you into the hallway and you hit your head really hard.")
}
console.log("*****************************************************************")
console.log("The evil spirits in the house have all awaken and are looking for you, on the floor is a piece of paper. It states that you would either risk your life and run for the door with a 50% chance of the door being locked. Or you have to sell your soul to the devil.")
console.log("If you sell your soul, you live a rich and fortunate life. You will only live to 40, but you will be rich and famous...which do you chose?")
console.log("*****************************************************************")
let runSell = READLINE.question("Run for the door or Sell your soul? (Type Run to run for the door, type Sell to sell your soul")
if(runSell == "sell" || runSell == "Sell"){
  console.log("You have officially soul your soul to the devil...the devil tricked you and you only lived to 19 and lived the rest of your 'dead' life in hell.")
}
if(runSell == "Run" || runSell == "run"){
  console.log("You run for the door and the door happened to be unlocked! You lived a long and wonderful life and never entered a haunted house ever again.")
}

console.log("*****************************************************************")
console.log("**************************The End********************************")
console.log("*****************************************************************")
.

