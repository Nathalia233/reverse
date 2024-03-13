const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

rl.question('Digite uma string para inverter seus caracteres: ', (str) => {
    const stringInvertida = inverterString(str);
    console.log(`A string invertida é: ${stringInvertida}`);
    rl.close();
});