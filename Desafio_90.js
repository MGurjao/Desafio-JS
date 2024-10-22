const cursos = ["JavaScrpt", "Java","Python","Node","ReactNatv"]

function filtrarCaracteres(array) {
    return array.filter(function(str) {
        return str.length === 9
    })

}

console.log(filtrarCaracteres(cursos))