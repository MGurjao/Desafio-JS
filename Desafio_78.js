const cursos = ["JavaScript", "Java","Python","Lua","ReactNative"]

function StringTemLetraE(array) {
    return array.filter(function(string){
        return string.includes("u")
    })

}

console.log(StringTemLetraE(cursos))