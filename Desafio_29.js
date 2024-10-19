const nomes = ["Amanda","Joao","Alberto","José","Maria","Alanaa"]

function comecamComLetraA(arrayDeString){
    return arrayDeString.filter(function(string){
        return string.charAt(0).toUpperCase() =="A"
    })

}

console.log(comecamComLetraA(nomes))