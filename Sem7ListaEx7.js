const body = document.querySelector('body')
const array = [1,2,3,4,5,6,7,8,9,10];
let satisfacao =0;
let teste=true; 
while (teste) {
    satisfacao = window.prompt("Digite um número de 1 a 10 :");
    for (let i=0;i<=9;i++) {
        if (array[i]==satisfacao) {
            teste=false;
            break;
        }
    }
    if (teste) alert("Entre somente com números de 1 a 10");
} 
for (let i = 1; i <= satisfacao; i++){
    busca()
}
async function  busca(){
    const cao = await fetch('https://dog.ceo/api/breeds/image/random')
    let url1 = await cao.json();
    body.insertAdjacentHTML("beforeend","<section style='background-Image:url("+url1.message+");background-repeat: no-repeat;background-size:contain'>Cão</section>")
    const gato = await fetch('https://api.thecatapi.com/v1/images/search')
    let url2 = await gato.json();
    body.insertAdjacentHTML("beforeend","<section style='background-Image:url("+url2[0].url+");background-repeat: no-repeat;background-size:contain'>Gato</section>")
}
