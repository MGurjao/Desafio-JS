const numeros = [10, 20, 30, 40, 50];

function exibirMediaNumeros(numeros) {
    let soma = 0; 

    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]; 
    }

    return soma / numeros.length; 
}

console.log(exibirMediaNumeros(numeros)); 
