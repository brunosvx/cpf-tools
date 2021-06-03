
function validateCPF(cpf){
    try{
        if(typeof cpf !== 'string') throw new TypeError('CPF must be String');
        cpf = cpf.replace(/[^\d]/g, "");

        if(cpf.length < 11) throw new Error('CPF length too low');
        if(cpf.length > 11) throw new Error('CPF length too high'); 

        const firstBit = cpf.split('').slice(0, -2);
        let firstValidate = firstBit.map((num, index) => num * (10 - index)).reduce((prev, cur) => prev + cur);
        firstValidate = 11 - (firstValidate % 11)
        const firstNumber = firstValidate > 9 ? 0 : firstValidate;

        firstBit.push(firstNumber);
        let secondValidate = firstBit.map((num, index) => num * (11 - index)).reduce((prev, cur) => prev + cur);
        secondValidate = 11 - (secondValidate % 11)
        const secondNumber = secondValidate > 9 ? 0 : secondValidate;

        if(cpf === firstBit.join('') + secondNumber) return true;

        return false;

    }catch(e){
        return e
    }
    
}



function generateCPF(format=false){
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

    if(format) return formatCPF(cpf.join(''));

    return cpf.join('');

}


function formatCPF(cpf){
    try{
        cpf = String(cpf).replace(/[^\d]/g, "");

        if(cpf.length < 11) throw new Error('CPF length too low');
        if(cpf.length > 11) throw new Error('CPF length too high');

        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    }catch(e){
        return e;
    }
   
}


module.exports = {
    formatCPF,
    generateCPF,
    validateCPF
}