function mudarPrimeiraUltimaLetra(array) {
    const resultado = []
    for (let i = 0; i < array.length; i++) {
        const str = array[i]
        const primeiraLetraMaiuscula = str.charAt(0).toUpperCase(); // Primeira letra em maiúscula
        const ultimaLetraMaiuscula = str.slice(-1).toUpperCase(); // Última letra em maiúscula
        const meioString = str.slice(1, -1); // Parte do meio da string, sem a primeira e última letra
        resultado.push(primeiraLetraMaiuscula + meioString + ultimaLetraMaiuscula); //
    }
    return resultado;

}
const nomes = ["joão","maria","josé"];
const resultado = mudarPrimeiraUltimaLetra(nomes);
console.log(resultado); 



