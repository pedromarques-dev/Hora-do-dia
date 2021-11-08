
function horario(){
    let data = new Date()
    let hora = data.getHours()
    let txt = document.getElementById('intro')
    let imagem = document.getElementById('foto')


    if(hora >=0 && hora < 12){
        txt.innerHTML = `Agora são exatamente: ${hora} horas`
        document.body.style.backgroundColor = 'rgba(238, 225, 149, 0.993)'
        imagem.src = 'images/dia.jpg'

    } else if(hora >= 12 && hora < 18){
        txt.innerHTML = `Agora são exatamente: ${hora} horas`
        imagem.src = 'images/tarde.jpg'
        document.body.style.backgroundColor = 'tomato'
    } else {
        txt.innerHTML = `Agora são exatamente: ${hora} horas`
        imagem.src = 'images/noite.jpg'
        document.body.style.backgroundColor = 'rgba(119, 84, 133, 0.836)'
    }

}