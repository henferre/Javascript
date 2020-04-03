function contador() {
    var inicio = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var passo = document.getElementById("passo")
    var res = document.querySelector("div#res")
    //---Valindando inicio, fim e passo---
    if (inicio.value.length == '') {
        res.innerHTML = 'Inicio invalido! escolha um número.'
    } if (fim.value.length == '') {
        res.innerHTML = "Fim invalido! escolha um número."
    } else if (Number(passo.value) == 0) {
        window.alert("Passo invalido! Considerando passo = 1")
        passo = 1
    }
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if (i < f) {
        while (inicio < fim) {
            res.innerHTML = `${i}`
            i += p
        }
    }else if (i > f) {
        res.innerHTML = `${i}`
        i -= p
    }
}   