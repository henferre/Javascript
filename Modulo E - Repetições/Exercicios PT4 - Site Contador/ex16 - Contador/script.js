function contador() {
    var inicio = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.querySelector("div#res")
    //---Valindando inicio, fim e passo---
    if (inicio.value.length == '') {
        res.innerHTML = 'Inicio invalido! escolha um número.'
    } else if (fim.value.length == '') {
        res.innerHTML = "Fim invalido! escolha um número."
    } else {
        res.innerHTML = 'Contando:<br> '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (Number(passo.value) == '' || Number(passo.value) == 0) {
            window.alert('Passo invalido! Considerando Passo = 1')
            p = 1
        }
        if (i < f) {//Contagem Crescente
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`// excluo o U+ e coloco \u{codigo} do emoji. 
            }
        } else if (i > f) {//Contagem decrescente
            for (var c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`//emoji do dedo pra direita
            }
        }
        res.innerHTML += `\u{1F3C1}`//Emoji da bandeira.
    }   
    
}   