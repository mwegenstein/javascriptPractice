// Create a game between the computer and the user playing rock paper scissors. Breaking down the problem:
// 1. Create a prompt for the user choice
// 2. using mathrandom set numbers equal to rock/paper/scissor (Math.random makes a variable equal to a number between 0 and 1)
// 3. Create function for return value of each rock/paper/scissor case
// 4. Set that inside of a compare function to determine who wins. 

//******Begin******//

var userChoice = prompt("Do you choose rock paper or scissor?");
var computerChoice = Math.random();
console.log(computerChoice);
	if (computerChoice >=0 && computerChoice <=.33) {
		computerChoice = "rock";
	} else if (computerChoice >=.34 && computerChoice<=.66) { //do i need the && value? look into order of operations if I can just do <= for each line
		computerChoice = "paper";
	} else {
		computerChoice = "scissor";
	}
	console.log(computerChoice);