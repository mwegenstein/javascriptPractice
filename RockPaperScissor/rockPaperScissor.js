// Create a game between the computer and the user playing rock paper scissors. Breaking down the problem:
// 1. Create a prompt for the user choice
// 2. using mathrandom set numbers equal to rock/paper/scissor (Math.random makes a variable equal to a number between 0 and 1)
// 3. Create function for return value of each rock/paper/scissor case
// 4. Set that inside of a compare function to determine who wins. 

//Notes: when changing a value of a variable that alreadys exists you do not need to use 'var'i.e w/computerChoice values
//-parameter names are meant to be general so call them choicex and choicey as opposed to computeChoice and userChoice - this way you can hold onto the function and pass any variable through it.

//******Begin******//

var userChoice = prompt("Do you choose rock paper or scissors?");
var computerChoice = Math.random();
	if (computerChoice >=0 && computerChoice <=.33) {
		computerChoice = "rock";
	} else if (computerChoice >=.34 && computerChoice<=.66) { //do i need the && value? look into order of operations if I can just do <= for each line
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}
var compare = function (choice1, choice2) { 
	if (choice1 === choice2) {
		return "Try again, the result is a tie!";
	} if (choice1 === "rock") {
		if(choice2 === "scissors") {
			return "rock wins!";
		} else {
			return "scissors wins";
		}
console.log("did I get here?");
	} if (choice1 === "scissors") {
		if (choice2 === "rock") {
			return "rock wins!";
		} else {
			return "scissors wins!";
		}
	} if (choice1 === "paper") {
		if (choice2 === "rock") {
			return "paper wins!";
		} else{
			return "rock wins!";
		}
	}
};
compare(userChoice, computerChoice);
