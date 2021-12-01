        /*const range = document.querySelector('#range'),*/
        let value=0
        const progressbar = document.querySelector('.progress-bar')
        const valor = document.querySelector('#lb01')
        let temporizador=setInterval( function (){
            if (value==100){
                alert('CONCLUÍDO')
                clearInterval(temporizador)
            }
            valor.innerHTML=value+'%'
            progressbar.style.setProperty('--progress', value++)
            
        },100) 
        
        
        
        /*  
        range.addEventListener('input', function(){
            const value = range.value;
        progressbar.style.setProperty('--progress', value)
        })*/
