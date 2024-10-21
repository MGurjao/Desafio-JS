function mudarPrimeiraLetra(array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        const str = array[i]
        resultado.push(str.charAt(0).toUpperCase() + str.slice(1));
    }
    return resultado;
}

const nomes = ["joão","maria","josé"]
const resultado = mudarPrimeiraLetra(nomes)
console.log(resultado);