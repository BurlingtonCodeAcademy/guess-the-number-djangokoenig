const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  console.log('You entered: ' + secretNumber);
  // Now try and complete the program.
  process.exit();

  async function start() {
  while (1) {
      let answer = await ask ("Are we done? ")
      answer = answer.ToLowerCase
      if (answer.includes('yes') {done =true}
    }
    console.log('You are done!');
    process.exit();
    // Now try and complete the program.
  
    async function start() {
    let done = false; 
      while (!done) {
        let answer = await ask ("Are we done? ")
          answer = answerToLowerCase(answer)
          if (answer.includes('yes') {done =true}
        }
        console.log('You are done!');
        process.exit();