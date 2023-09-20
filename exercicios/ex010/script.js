function calcular() {
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel}Km/h`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi multado!</p>` 
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}