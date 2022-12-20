function carregar() {

    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('foto')
    var data = document.getElementById('data')

    var date = new Date
    var hora = date.getHours()
    var minutos = date.getMinutes()
    var dia = date.getUTCDate()
    var mes = date.getMonth()



    mensagem.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    //condicional da hora
    if (hora >= 0 && hora < 12) {

        foto.src = 'img/dia.png'
        document.body.style.backgroundColor = '#4A664D'

    } else if (hora >= 12 && hora < 18) {

        foto.src = 'img/tarde.png'
        document.body.style.backgroundColor = '#B78C0D'

    } else {

        foto.src = 'img/noite.png'
        document.body.style.backgroundColor = '#403357'
    }


    //condicional da data

    switch (mes) {

        case 0:
            mes = 'Janeiro'
            break;

        case 1:
            mes = 'fevereiro'
            break;

        case 2:
            mes = 'Março'
            break;

        case 3:
            mes = 'Abril'
            break;

        case 4:
            mes = 'Maio'
            break;

        case 5:
            mes = 'Junho'
            break;

        case 6:
            mes = 'Julho'
            break;

        case 7:
            mes = 'Agosto'
            break;

        case 8:
            mes = 'Setembro'
            break;

        case 9:
            mes = 'Outubro'
            break;

        case 10:
            mes = 'Novembro'
            break;

        case 11:
            mes = 'Dezembro'
            break;

    }
    data.innerHTML = `Do dia ${dia} de ${mes}  `


}