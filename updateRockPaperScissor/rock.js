var getUserInput = function (){
    return prompt("Do you choose rock, paper or scissors?");
} 

var getComputerChoice = function () { //we created this function in order to invoke the function to get new values for computerChoice 
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
      computerChoice = "paper";
  } else {
      computerChoice = "scissors";
  }
  return computerChoice
} 

var losingChoice = function (choice) {
	if ( choice == 'rock') { return 'scissors'}
	if ( choice == 'scissors') { return 'paper'}
	if ( choice == 'paper') { return 'rock'}

	return losingValue
} 


var compare = function(userChoice, compChoice) {
    if (userChoice === null) {
        alert ('Please enter an option');    
    } 
    else if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        alert("No!!!") 
        compare(getUserInput(), getComputerChoice());  //but I haven't defined compChoice yet just passed through a parameter?
    }

    if (userChoice === compChoice) { //every if statement chunk = "fork"
        alert("The result is a tie!");
    } else {
      	var winner = (compChoice == losingChoice(userChoice) ? userChoice : compChoice)
        alert(winner + " wins!")
        compare(getUserInput(), getComputerChoice()) 
    }
};
// compare (getUserInput, getComputerChoice());
compare(getUserInput(), getComputerChoice())

//toDo: make the alerts not be alerts, have a user interface that instead of just returning the aanswer returns the computer choice and user choice on display and presents an image. also commit to github what I had before and what is became.
