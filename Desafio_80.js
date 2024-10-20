const numeros = [16,20,24,30,40,80,100]

function numDivPorOito(num){
    if (num % 8 ===0)
        return num
}

console.log(numeros.filter(numDivPorOito))