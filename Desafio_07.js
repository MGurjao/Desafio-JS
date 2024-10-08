const pessoa = {
    nome: "Martinho",
    cpf: "123.123.123-12",
    cidade: "Campina Grande",
    notas:[8.5, 7.2, 9.0, 6.8],

}

console.log(`Nome:  ${pessoa.nome}`)
console.log(`CPF: ${pessoa.cpf}` )
console.log(`Cidade: ${pessoa.cidade}`)

console.log(`A primeira nota é: ${pessoa.notas[0]}`)
console.log(`A segunda nota é: ${pessoa.notas[1]}`)
console.log(`A terceira nota é: ${pessoa.notas[2]}`)
console.log(`A quarta nota é: ${pessoa.notas[3]}`)

const media = (pessoa.notas[0] + pessoa.notas[1] + pessoa.notas[2] + pessoa.notas[3])/pessoa.notas.length 
console.log(`A média fo aluno é ${media}`)

const notaSort = pessoa.notas[Math.floor(Math.random()*pessoa.notas.length)]
const notaConvertida = notaSort*10
console.log(`A nota sorteada foi: ${notaSort} e convertida para a escala de 0-100  é: ${notaConvertida}`)




