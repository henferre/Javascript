/*
Comando num.indexOf(numero q quer buscar) para buscar o numero desejado
Se ele encontrar ira retornar a posição do numero,
se não ele ira retornar -1.

lembresse de colocar o O maiusculo no comando .indexOf()
*/
let num = [5, 8, 2, 9, 3]
num.push(1)
let pos = num.indexOf(8)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor é ${num[0]} na posição 0.`)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor 8 esta na posição ${pos}.`)
}