const frutas = ['banana', 'maçã', 'laranja', 'abacaxi', 'uva'];
const ultimasComA = frutas
    .filter(function(fruta) {
        return fruta.endsWith('a');
})

console.log(ultimasComA)



