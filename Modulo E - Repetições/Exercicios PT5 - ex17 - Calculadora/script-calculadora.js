function tabuada() {
    let numero = document.getElementById("numero")
    let tabuada = document.getElementById("tabuada")
    if (numero.value.length == "") {
        window.alert("Por favor, digite um número!")
    } else {
        let n = Number(numero.value)
        let c = 0
        tabuada.innerHTML =""
        while (c <= 10) {
            let item = document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}