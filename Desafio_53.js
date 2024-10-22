const nomes = ["Maria", "João", "Pedro"]

function RemoveVogal(array) {
    return array.map(function(nome) {
        return nome.replace(/a|e|i|o|u|A|E|I|O|U/g, "")
    });
}

console.log(RemoveVogal(nomes))