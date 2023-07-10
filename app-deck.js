const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Чи подобається вам програмуваання?y/n', (answer1) => {
rl.question('Чи працюєте на css?y/n', (answer2) => {
rl.question('Чи працюєте з HTML?y/n', (answer3) => {
    console.log(`Ваші відподі:\n1. ${answer1}\n2. ${answer2}\n3. ${answer3}`);
    rl.close();
        });
    });
});