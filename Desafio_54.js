const palavras = ["Banana", "Maçã", "bola", "Abacaxi", "Brócolis", "Cenoura"]

function filtrarPalavrasComB(array) {
    return array.filter(function(palavra) {
        return palavra.indexOf("B") === 0
    })
}

console.log(filtrarPalavrasComB(palavras))