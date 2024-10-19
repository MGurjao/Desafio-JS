const front = ["html", "css", "javascript", "react"];

function textoMaiusculo(arrayDeString) {
    return arrayDeString.map(function(string) {
        return string.toUpperCase();
    });
}

const front2 = textoMaiusculo(front);

console.log(front2);