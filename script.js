
function validate(cpf){
    const firstBit = cpf.split('').slice(0, -2);
    let firstValidate = firstBit.map((num, index) => num * (10 - index)).reduce((prev, cur) => prev + cur);
    firstValidate = 11 - (firstValidate % 11)
    const firstNumber = firstValidate > 9 ? 0 : firstValidate;

    firstBit.push(firstNumber);
    let secondValidate = firstBit.map((num, index) => num * (11 - index)).reduce((prev, cur) => prev + cur);
    secondValidate = 11 - (secondValidate % 11)
    const secondNumber = secondValidate > 9 ? 0 : secondValidate;

    if(cpf === firstBit.join('') + secondNumber) return 'CPF Válido';

    return 'CPF inválido';
}



function generateCPF(){
    let cpf = ''

    for(let i = 0; i < 9; i++){
        cpf += Math.floor(Math.random() * 10);
    }

    cpf = cpf.split('');

    let firstNumber = cpf.map((num, index) => num * (10 - index)).reduce((prev, cur) => prev + cur);
    firstNumber = 11 - (firstNumber % 11) > 9 ? 0 : 11 - (firstNumber % 11);
    cpf.push(firstNumber);

    let secondNumber = cpf.map((num, index) => num * (11 - index)).reduce((prev, cur) => prev + cur);
    secondNumber = 11 - (secondNumber % 11) > 9 ? 0 : 11 - (secondNumber % 11);
    cpf.push(secondNumber);

    return cpf.join('');

}


validate('12345678901'); // --> CPF inválido



generateCPF() // --> CPF válido