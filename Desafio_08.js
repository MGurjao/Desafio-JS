notas = [9.0,8.0,7.0]

console.log(`A primeira nota é: ${notas[0]}`)
console.log(`A segunda nota é: ${notas[1]}`)
console.log(`A terceira nota é:${notas[2]}`)

media =(notas[0] + notas[1] + notas[2])/3

console.log(`A média do aluno é: ${media}`)

if (media >= 7) {
    console.log("APROVADO")
}else {
    return "REPROVADO"
}