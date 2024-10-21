function mudarUltimaLetra(array) {
    const resultado = [];
    for (let i = 0; i < array.length; i++) {
        const str = array[i];
        const ultimaLetraMaiuscula = str.slice(-1).toUpperCase(); 
        const restoString = str.slice(0, -1)
        resultado.push(restoString + ultimaLetraMaiuscula); 
    }
    return resultado;
}
const nomes = ["joão","maria","josé"];
const resultado = mudarUltimaLetra(nomes);
console.log(resultado); 
