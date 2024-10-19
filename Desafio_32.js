const alunos = [{
    nome: "Joao",
    idade:20,
    notas: [7,8,10]
},
{
    nome: "Maria",
    idade:22,
    notas: [9,8,10]
}
]

const nomesAlunos = alunos.map(function(alunos){
    return alunos.nome
})

console.log(nomesAlunos)