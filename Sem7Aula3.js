const body = document.getElementsByTagName("body")[0];

let numero = window.prompt("Digite um número de 1 a 10");

if(numero > 0 && numero <= 10){

}else{
    alert("número invalido, por padrão será escolhido o 5");
    numero = 5;
}
const getjson = (dado) => dado.json()
for(let i = 1; i <= numero; i++){
    let sections;
    let promessacao =fetch("https://dog.ceo/api/breeds/image/random")
    .then(getjson)
    let promessagato =fetch("https://api.thecatapi.com/v1/images/search")
    .then(getjson)
    Promise.all([promessacao,promessagato]).then((values) => {
        for( item of values){
            if (Object.prototype.toString.call(item)=='[object Object]'){
                const resultado = item.message;
                const section = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
                body.insertAdjacentHTML("beforeend",section)

            }else{
                const resultado = item[0].url;
                const section = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
                body.insertAdjacentHTML("beforeend",section)

            }
        }



    })
}
