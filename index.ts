import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()*6);

const answer = await inquirer.prompt([
    {
        name: "userGueesedNumber:",
        type: "number",
        message: "please guess a number between 1 t0 6:"
    },
]);

if(answer.userGueesedNumber === randomNumber ){
    console.log("congratulation ! you guessed a right number.");
    
}else{ 
    console.log("You Guessed Wrong Number");
    
}