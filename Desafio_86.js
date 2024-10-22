const palavras = ["Banana", "Damasco", "bola", "Abacaxi", "Brócolis", "Cenoura"]

function filtrarPalavrasComB(array) {
    return array.filter(function(palavra) {
        return palavra.indexOf("D") === 0
    })
}

console.log(filtrarPalavrasComB(palavras))