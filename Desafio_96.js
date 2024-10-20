const numeros = [6, 12, 18, 20, 24, 30, 36, 40, 48]

function exibirNumMultNove(num){
    if (num % 9 === 0)
    return num

}

console.log(numeros.filter(exibirNumMultNove))