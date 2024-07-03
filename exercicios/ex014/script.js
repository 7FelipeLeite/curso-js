function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/morning.png"
        document.body.style.background = "#E5664B"
    } else if (hora >= 12 && hora <= 18) {
        img.src = "imagens/evening.png"
        document.body.style.background = '#0167B1'
    } else {
        img.src = "imagens/night.png"
        document.body.style.background = '#192946'
    }
}