// - scissors beats paper
// - paper beats rock
// - rock beats scissors

// - Random generator - from previous lesson 04-04-2024
function getRandomComputerInput() { // generates a random choice for the computer player from the array
    var computerOptionArray = ['rock', 'paper', 'scissors']; // random choice for the array
    var randomIndex = Math.floor(Math.random() * 3) + 1; // generate a random index between 1 - 3,
    console.log('randomIndex = ', randomIndex);
    return computerOptionArray[randomIndex] // and then returns the corresponding element from the array
}

var humanInput = 'paper'; // the human player's input is stored int the `humanInput` variable, which is set to `'scissors'`.
console.log('humanInput = ', humanInput);

var computerInput = getRandomComputerInput(); // the computer's input is generated using the `getRandomComputerInput()` F  function and stored in the `computerInput` variable
console.log('computerInput = ', computerInput);

// Define the game rules
const gameRules = {
    rock: {
        beats: 'scissors',
        loses: 'paper'
    },
    paper: {
        beats: 'rock',
        loses: 'scissors'
    },
    scissors: {
        beats: 'paper',
        loses: 'rock'
    }
};

// Determine the winner
function determineWinner(human, computer) {
    // Check if the human input is valid key in the `gameRules` object. 
    if (!gameRules[human]) {
        return 'Invalid human input!'; // if not, return the 'Invalid human input' message.
    }

    if (human === computer) { // `human` input is the same as the `computer` input. if they are the same, the function returns the string "it's a tie!"
        return "It's a tie!";
    } else if (gameRules[human].beats === computer) { // if the `human` input is not the same as the `computer` input. functions checks if the `human` input beats the `computer` input according to the game rules defined in the `gameRules` object. 
        return 'Human wins!';
    } else if (gameRules[human].loses === computer) {
        return 'Computer wins!';
    } else {
        return 'Invalid input!';
    }
}

// Display the result
console.log(determineWinner(humanInput, computerInput));
