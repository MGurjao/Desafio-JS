numeros = [10,20,2,5,30,40,50]

function exibirMenorValor(){

    return Math.min(...numeros)

}

const menor = exibirMenorValor(numeros)

console.log(`O menor valor da array é ${menor}`)