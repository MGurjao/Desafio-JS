const cursos = ["JavaScript", "Java","Python","Node","zig"]

function StringTemLetraE(array) {
    return array.filter(function(string){
        return string.includes("z")
    })

}

console.log(StringTemLetraE(cursos))