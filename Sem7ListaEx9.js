        /*Sem7ListaEx8*/
        let value=100
        let cor=""
        const progressbar = document.querySelector('.progress-bar')
        const caixa = document.querySelector('#caixa')
        const valor = document.querySelector('#lb01')
        caixa.addEventListener("click", addValor)
        let temporizador=setInterval( function (){
            valor.innerHTML=value+'%'
            value>30?cor="green":cor="brown"
            caixa.style.backgroundColor = cor
            progressbar.style.setProperty('--progress', value--)
            if (value<=0 || value>100){
                alert('GAME OVER!!!!!!!')
                clearInterval(temporizador)
            }
        },100) 
        function addValor(){
            value=value*1.25
        }

