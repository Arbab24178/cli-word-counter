#! urs/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgGreenBright.bold("\n\t\t Welcome to the Khan - Word Counter"));
console.log("=".repeat(60));

let answers = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"Enter the Sentence abcd: ",
    }
]);

let words = answers.sentence.trim().split("");

console.log("=".repeat(60));
console.log(chalk.bold("-Sentence Word: "));
console.log(words);
console.log(chalk.bold(`\n - Word Counter: ${chalk.bold.bgRedBright(words.length)}`));

