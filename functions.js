//  Problem
// - Function to get user input
// - Function the make computer choose
// - There are 5 rounds: meaning that the functions will be called 5 times, rounds can be looped with for loop
// Use 1, 2 and 3 for rock, paper and scissors

// Algorithm
// 1. Initialize variables: define variables, loop counter, score(user,computer)
// 2. Call function to take user input via prompt and save choice in variable user
// 3. Call function to make computer choice: use function that includes random selection logic, output into computer
// 4. Use function to declare winner of round: compare user and computer picks and output winner: increase score of winner, use switch or if logic to increase score
// 5. If counter gets to round 5 exit routine

let userScore = 0;
let compScore = 0;


function humanChoice(){
    let userChoice = prompt(`Pick your choice! Type in number of your choice
        1 - Rock
        2 - Paper
        3 - Scissors
        `)
    return userChoice
}

function getRandomInt() {
    return Math.floor(Math.random() * 3);
  }

function computerChoice(){
    let compChoice = 0;
    
    compChoice = getRandomInt()+1;
    compChoice.toString()
    return compChoice
}


function playRound(humanChoice, compChoice){
    let usecase
    userChoice = humanChoice
    compChoice = compChoice
    if(userChoice==compChoice){
        usecase=1
        // Draw
        console.log("Draw!")
    }
    else if (userChoice==1 && compChoice==2){
        usecase=2 
        // Rock - Paper --> User Lose
        compScore++
        console.log("Computer wins round")
    }
    else if (userChoice==1 && compChoice==3){
        usecase=3
        // Rock - Scissors --> User Win
        userScore++
        console.log("User wins round")
    }
    else if (userChoice==2 && compChoice==1){
        usecase=4
        // Paper - Rock --> User Win
        userScore++
        console.log("User wins round")
    }
    else if (userChoice==2 && compChoice==3){
        usecase=5
        // Paper - Scissors --> User Lose
        compScore++
        console.log("Computer wins round")
    }
    else if (userChoice==3 && compChoice==1){
        usecase=6
        // Scissors - Rock --> User Lose
        compScore++
        console.log("Computer wins round")
    }
    else if (userChoice==3 && compChoice==2){
        usecase=7
        // Scissors - Paper --> User Win
        userScore++
        console.log("User wins round")
    }

        return {userScore, compScore}

    
}


function playGame(){
    for (let i=1; i<6; i++){
    playRound(humanChoice(), computerChoice())
    console.log(userScore,compScore)
}
}


playGame()

