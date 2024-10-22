const cursos = ["JavaScript", "Java","Python","Node","ReactNative"]

function StringTemLetraE(array) {
    return array.filter(function(string){
        return string.includes("e")
    })

}

console.log(StringTemLetraE(cursos))