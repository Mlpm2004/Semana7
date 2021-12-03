        /*Sem7ListaEx8*/
        let value=100
        let imagem=""
        let cliques=0
        let secou=false
        const progressbar = document.querySelector('.progress-bar')
        const caixa = document.querySelector('#caixa')
        const valor = document.querySelector('#lb01')
        caixa.addEventListener("click", addValor)
        let temporizador=setInterval( function (){
            if (value>30){
                imagem="plant-flower-shiny.gif"

            }else{
                imagem="plant-dying.png"
                secou=true
            }
            progressbar.style.setProperty('--progress', value--)
            if (value<0 || value>100){
                alert('GAME OVER!!!!!!!')
                clearInterval(temporizador)
                imagem="plant-dying-flies.gif"
                value=0
            }
            valor.innerHTML=value.toFixed(2)+'%'
            caixa.style.backgroundImage = `url('${imagem}')`
        },100) 
        function addValor(){
            value=value*1.25
            cliques++
            if (cliques>=5 && !secou){
                alert('1')
            }

        }
