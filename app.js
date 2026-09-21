let userscore = 0;
let compscore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msgPara = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

let userChoice;
let compChoice;

choices.forEach((choice) => {

    choice.addEventListener("click", () => {

        // User choice
        userChoice = choice.getAttribute("id");

        // Computer  possible choices
        const option = ["rock", "paper", "scissor"];

        // Computer random number
        let randomIndex = Math.floor(Math.random() * 3);

        // Computer  choice
        compChoice = option[randomIndex];

       
        msgPara.innerText =
            "You: " + userChoice + " | Computer: " + compChoice;

        // Draw
        if (userChoice === compChoice) {

            console.log("Draw");

        }

        // User wins
        else if (
            (userChoice === "rock" && compChoice === "scissor") ||
            (userChoice === "paper" && compChoice === "rock") ||
            (userChoice === "scissor" && compChoice === "paper")
        ) {

            userscore++;
            userScorePara.innerText = userscore;

            console.log("You Win");

        }

        // Computer wins
        else {

            compscore++;
            compScorePara.innerText = compscore;

            console.log("Computer Win");

        }

    });

});