const alunos = [{
    nome: "Joao",
    idade:20,
    notas: [7,8,10]
},
{
    nome: "Maria",
    idade:22,
    notas: [9,8,10]
},
{
    nome:"José",
    idade:16,
    notas:[10,7,5]
}
]

const alunosMaioresDeIdade = alunos.filter(function(aluno) {
    return aluno.idade >= 18;
})

console.log(alunosMaioresDeIdade)
