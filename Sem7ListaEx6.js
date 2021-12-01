        async function loadjson() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const names = await response.json();
            const novoaArray =  names.map(elementos=> {return { titulo:elementos.title,estado:elementos.completed}})
            novoaArray.forEach(criachamada)
            function criachamada(element,index,array){
                const {titulo,estado}=element
                addtarefa(titulo,estado,1)
             }
        }
        function buscaDadosLocalstorage(){ // Carrega dados armazenados no localstorage
            return JSON.parse(localStorage.getItem("obj"))
            
        }
        function carregaDadosLocalstorage(obj){ // Insere dados alterados no localstorage e remonta a tela
            localStorage.setItem('obj', JSON.stringify(obj));
            montaTela()
       }
        function montaTela(){ //Monta a lista de tarefas na tela
            html=""
            var linhas=buscaDadosLocalstorage()
            for (obj in linhas){ //Busca dados das linhas a serem montadas
                var tarefa=linhas[obj].tarefa
                var checked=linhas[obj].checked
                var riscado=linhas[obj].riscado
                var id=linhas[obj].id
                var obj=linhas[obj].obj
                riscado= (riscado=="" ? "":"style=text-decoration:line-through;color:red") //Verifica se o item é riscado ou não
                //Monta html
                html+=`<div id="linha${id}" class="nowrap"> <div class="inputck"><input type="checkbox"  ${checked} id="ck${id}" onclick="riscalinha('obj${id}')"><label id="obj${id}" ${riscado}>${tarefa}</label></div><div class="btck"> <button onclick="removelinha('obj${id}')"><img src="https://img.icons8.com/small/16/000000/delete.png"/></button></div></div>`
            }
            document.getElementById('lista').innerHTML=html //Popula DIV com a lista de tarefas
        }
        function addtarefa(tarefajson,checado,origem){//Adiciona tarefa na lista
            if (!document.getElementById('entratarefa')&&origem==0){ // testa se input está vazio
                alert("Tarefa não pode ser vazia!!") // Mensagem de erro e abandona processo
            }else{ //Adiciona tarefa
                var dados=new Object // objeto para receber a nova tarefa
                var historico=new Object //objeto com os dados já existentes
                historico= buscaDadosLocalstorage() //busca dados no localstorage
                var juntar= new Object //objto que vai concatenar as tarefas existentes com a nova
                count=1 //contador para gerar indice dos objeos a serem recarregados no localstorage
                var linha=""
                if (historico!=null){ //testa se objeto existia no localstorage
                    if (Object.keys(historico).length>=2){ //se houver 2 ou mais tarefas ja inseridas faz a varredura
                        for (linha in historico){
                            if (historico[linha].id >count) count=historico[linha].id
                            juntar[linha]=historico[linha] //guarda dados ja existentes neste objeto para juntar com o novo
                        }
                        count++
                    }else{
                        juntar=historico // Se houver somente uma tarefa, adiciona a este objeto para juntar com o novo
                        count=2 
                    }
                }
                // monta nova tarefa no objeto dados
                if (origem==0){
                    dados.tarefa=document.getElementById('entratarefa').value
                    document.getElementById('entratarefa').value=""
                    dados.checked=""
                    dados.riscado=""
                }else{
                    dados.tarefa=tarefajson
                    if (checado==true){
                        dados.checked="checked"
                        dados.riscado="line-through"
                    }else{
                        dados.checked=""
                        dados.riscado=""
                    }
                }
                dados.id=count
                juntar["obj"+count]=dados // concatena dados existentes, se existirem,  com o novo
                carregaDadosLocalstorage(juntar) //carrega no localstorage
            }
        }
        function riscalinha(id){
            let el = document.getElementById(id); //resgata elemento a ser riscado ou limpo
            var stsatual = (el.style.textDecoration=="line-through" ? "" : "line-through") // realiza a lógica de inversão do estado atual
            el.style.textDecoration=stsatual //aplica o novo estilo
            atualizaLocalStorage(id,stsatual) // salva alteração no localstorage
        }
        function atualizaLocalStorage(indice,stsatual){
            var linhas=buscaDadosLocalstorage()
            var dados= new Object 
            var juntar= new Object
            var ck = (stsatual ==  "line-through"? "checked":"")   // realiza a lógica de inversão do estado atual do checkbox     
            for (obj in linhas){ // varre o conteúdo do localstorage em busca do indice com o conteúdo a ser alterado
                if(indice==obj){
                    dados.tarefa=linhas[obj].tarefa
                    dados.checked=ck
                    dados.riscado=stsatual
                    dados.id=linhas[obj].id
                    juntar[obj]=dados // reescreve a linha
                }else{
                    juntar[obj]=linhas[obj] // mantém as linhas não afetadas
                }
            }
            carregaDadosLocalstorage(juntar) //armazena no localstorage
        }
        function removelinha(ind){ //REmove uma linha da lista
            var linhas=buscaDadosLocalstorage()
            novoid=1
            var organizar=new Object // objeto para receber os dados com os indices reajustados
            for (obj in linhas){  // varre o conteúdo do localstorage
                if(ind==obj){ // quando encontra o índice ignora a linha
                }else{ //demais linhas são armazenadas no novo objeto
                    linhas[obj].id=novoid //Realiza o acerto dos indices nos objetos
                    organizar["obj"+novoid]=linhas[obj] 
                    novoid++
                }
            }
            carregaDadosLocalstorage(organizar) //grava no localstorage
            verificaLocalstoragevazio("obj") // se objeto ficar vazio, destroí  no localstorage
        }
        function verificaLocalstoragevazio(obj){ //Verifica se objeto está vazio e elimina
            var linhas=buscaDadosLocalstorage()
            var count=0
            for (obj in linhas){ //verifica se tem algum conteúdo ou se está vazio
                count++
                break
            }
            if (count==0)  localStorage.clear(obj) //Se o conteúdo do objeto no local storage for vazio remove o objeto 
        }
    // Listener para acionar a adição de tarefas também pela tecla enter
    document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
            var btn = document.querySelector("#btn1");
            btn.click();
        }
    });

