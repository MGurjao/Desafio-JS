const numeros = [100,105,110,115,120,127,130,200]

function numDivPorCem(num){
    if (num % 100 ===0)
        return num
}

console.log(numeros.filter(numDivPorCem))