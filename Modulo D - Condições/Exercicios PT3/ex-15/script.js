function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('ERRO!!! Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                genero = 'um bebe'
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade < 11) {
                genero = 'um menino'
                img.setAttribute('src', 'foto-menino.png')
            } else if (idade < 21) {
                genero = 'um jovem'
                img.setAttribute('src', 'foto-adole-m.png')
            } else if (idade < 50) {
                genero = 'um Homem'
                img.setAttribute('src', 'foto-homem.png')
            } else {
                genero = 'um senhor'
                img.setAttribute('src', 'foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 2) {
                genero = 'uma bebe'
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade < 11) {
                genero = 'uma menina'
                img.setAttribute('src', 'foto-menina.png')
            } else if (idade < 21) {
                genero = 'uma jovem'
                img.setAttribute('src', 'foto-adole-f.png')
            } else if (idade < 50) {
                genero = 'uma Mulher'
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                genero = 'uma senhora'
                img.setAttribute('src', 'foto-idosa.png')
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)//add o elemento(foto) com esse comando
    }
}