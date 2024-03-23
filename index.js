#! /usr/bin/env node
import inquirer from "inquirer";
// 1 Computer Will  genarate a random number
// 2 user input for  gussing a number
//3 compare of user with computer genarate number and show results
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congtratulation you are right number");
}
else {
    console.log("you guesed worry number");
}
