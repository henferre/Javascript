/*
Comando switch() é parecido com while em Python,e o comando
case: dentro do switch() é igual a usar if, else if e o
comando defaut: é o else.

O switch() é uma estrutura mais limitada q o if pois só 
funciona com numeros ou strings (valores pontuais),
ele é muito util em situações pontuais.
*/
/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
var agora = new Date()
var diasemana = agora.getDay()

switch(diasemana) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
    case 6:
        console.log('Sábado')
    default:
        console.log('ERRO! Dia invalido!!!')
        break
}
