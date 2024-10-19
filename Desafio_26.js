const front = ["HTML","CSS","JAVASCRIPT","REACT"];

function textoMinusculo(arrayDeString) {
    return arrayDeString.map(function(string) {
        return string.toLowerCase();
    });
}

const front2 = textoMinusculo(front);

console.log(front2);