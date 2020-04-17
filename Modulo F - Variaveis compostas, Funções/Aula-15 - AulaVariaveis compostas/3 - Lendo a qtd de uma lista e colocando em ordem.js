/*
Comando num.length para dizer quantos itens tem numa lista,
no caso a baixo temos 4.

Comando num.sort() para deixar todos os itens da lista em ordem crescente.
*/

let num = [5, 8, 4]
num.push(7)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`Os itens do vetor estão nessa ordem: ${num}.`)
num.sort()
console.log(`Agora os itens do vetor estão nessa ordem: ${num}.`)
/*Dependendo onde vc colocar o comando sorte ele ira mudar a sequencia
entao podemos usar isso como no exemplo a cima para mudar formatação.

Irei colocar como posso ler itens selecionados a baixo.
*/
console.log(`O primeiro valor da lista em ordem é ${num[0]}.`)