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
const cont = 0
const somaDasIdades = alunos.reduce(function(cont, aluno) {
    return cont + aluno.idade;
}, cont)


const mediaDasIdades = somaDasIdades / alunos.length;

console.log(`A média das idades dos alunos é: ${mediaDasIdades}`);