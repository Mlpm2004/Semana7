        /*Sem7ListaEx8*/
        const imagem=""
        let desligaTemp = []
        const secou=false
        let ind=1
        let pontos=0
        const placar= document.querySelector('#pontos')
        placar.innerHTML=pontos
        criaCaixa(ind,imagem,secou)
        function temporizar(value,imagem,secou,progressbar,caixa,valor,cliques){
            caixa.addEventListener("click", addValor)
            let imagemOld="plant-flower-shiny.gif"
            desligaTemp.push(setInterval( function (){
              
                if (value>=70){
                    if (imagem!="plant-flower-shiny.gif") imagemOld=imagem
                    imagem="plant-flower-shiny.gif"
                     
                }else if(value>=31 && value<70) {
                    if (imagem!="plant-default") imagemOld=imagem
                    imagem="plant-default"
                }else{
                    if (imagem!="plant-dying.png") imagemOld=imagem
                    imagem="plant-dying.png"
                    secou=true
                }
                progressbar.style.setProperty('--progress', value--)
                if (value<0 || value>100){
                    alert('GAME OVER!!!!!!!')
                    for(item in desligaTemp)clearInterval(item)
                    imagem="plant-dying-flies.gif"
                    value=0
                }
                valor.innerHTML=value.toFixed(2)+'%'
                caixa.style.backgroundImage = `url('${imagem}')`
            },100))
            function addValor(){
                if (imagemOld=="plant-default" && imagem=="plant-flower-shiny.gif"){
                    pontua(500,'soma')
                    imagemOld==""
                }
                pontua(50,'soma')
                value=value*1.25
                cliques++
                if (cliques==5 && !secou){
                    caixa.style.backgroundColor = 'yellow'
                    ind++
                    criaCaixa(ind)
                }
            }
            function pontua(ind,op){
                (op=='soma')?pontos+=ind:pontos-=ind
                placar.innerHTML=pontos     
            }

        }
        function criaCaixa(ind,imagem,secou){
            const cliques=0
            const value=100
            const principal = document.querySelector('#principal')
            const quadrado= `   <div class='flor'>
                                    <div class='quadrado' id='caixa${ind}'></div>
                                    <label id='lb${ind}'>100,00%</label>
                                    <div id='progress${ind}' class='progress-bar retangulo'></div>
                                </div>`
            principal.insertAdjacentHTML('beforeend', quadrado)
            const progressbar = document.querySelector('#progress'+ind)
            const caixa = document.querySelector('#caixa'+ind)
            const valor = document.querySelector('#lb'+ind)
            temporizar(value,imagem,secou,progressbar,caixa,valor,cliques)
           
        }

