
    function somar() {

        var tn1 = document.getElementById('txt1')
        var tn2 = document.getElementById('txt2')
        var res = document.getElementById('resultado')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma = n1 + n2

        res.innerHTML = `O calculo de ${n1} + ${n2} é = <strong> ${soma} </strong>`

    }

    function subtrair() {

        var tn1 = document.querySelector('input#txt1sub1')
        var tn2 = document.querySelector('input#txt2sub2')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var res = document.querySelector('#resultado')

        var sub = n1 - n2

        res.innerHTML = `O calculo de ${n1} - ${n2} é = <strong> ${sub} </strong>`

    }

    function multiplicar(){

        var tn1 = document.querySelector('input#txt1mult1')
        var tn2 = document.querySelector('input#txt2mult2')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var res = document.querySelector('#resultado')

        var mult = n1 * n2

        res.innerHTML = ` ${n1} multiplicado por ${n2} é = <strong> ${mult} </strong>`

    }

    function dividir(){

        var tn1 = document.querySelector('input#txt1div1')
        var tn2 = document.querySelector('input#txt2div2')
        var n1 = (tn1.value)
        var n2 = (tn2.value)
        var res = document.querySelector('#resultado')

        var div = n1 / n2

        res.innerHTML = `${n1} dividido por ${n2} é = <strong> ${div} </strong>`
''
    }







