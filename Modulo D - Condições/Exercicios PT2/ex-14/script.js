function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    //hora = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = "fotomanha.png"//mudando a imagem src.
        document.body.style.background = "#eed09f"
    }else if (hora < 18) {
        img.src = "fototarde.png"
        document.body.style.background = "#cda47b"//n esqueça o # primeiro.
    } else {
        img.src = "fotonoite.png"
        document.body.style.background = "#505152"
    }
}

