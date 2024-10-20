const numeros = [6, 12, 18, 20, 24, 30, 36, 40, 48]

function exibirNumMultSeis(num){
    if (num % 6 === 0)
    return num

}



//const numeros2 = numeros1.filter(num => num % 5 ==0)

console.log(numeros.filter(exibirNumMultSeis))