const cursos = ["Java", "JavaScri","SpringBt","ReactNtv"]

function filtrarStringsComOitoCaracteres(array) {
    return array.filter(function(str) {
        return str.length === 8
    });
}

// Exemplo de uso

const resultado = filtrarStringsComOitoCaracteres(cursos);
console.log(resultado)
