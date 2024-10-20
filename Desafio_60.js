const numeros = [7,14,21,30,40,50,60]

function numDivPorSete(num){
    if (num % 7 ===0)
        return num
}

console.log(numeros.filter(numDivPorSete))