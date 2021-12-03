        /*Sem7ListaEx8*/
        let value=100
        let cor=""
        const progressbar = document.querySelector('.progress-bar')
        const caixa = document.querySelector('#caixa')
        const valor = document.querySelector('#lb01')
        let temporizador=setInterval( function (){
            if (value==0){
                alert('CONCLUÍDO')
                clearInterval(temporizador)
            }
            valor.innerHTML=value+'%'
            value>30?cor="green":cor="brown"
            caixa.style.backgroundColor = cor
            progressbar.style.setProperty('--progress', value--)
            
        },100) 

