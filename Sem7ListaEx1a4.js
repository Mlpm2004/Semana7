//Sem7ListaEx1.js
console.log('Dada a seguinte lista, utilizando o método forEach, imprima no console cada um dos elementos, seguidos de seu índice, no formato "Índice - Nome".\n')
const frutas=[ "Banana", "Morango", "Maçã", "Uva", "Pêra" ] 
frutas.forEach((element,index) => { 
   console.log( index+"-"+element) 
});
console.log( '\n') 
console.log('Dado o seguinte array, crie um novo array utilizando o método Array.map, onde cada valor seja igual à multiplicação do valor da lista original pelo seu antecessor.\n')
const lista =  [ 3, 5, 7, 9, 11, 13 ]
const mapLista = lista.map((elemento)=>{return elemento*(elemento-2)})
console.log( mapLista) 
console.log( '\n') 
console.log( 'Dada a seguinte lista de clientes, crie uma nova lista onde cada um dos objetos tenha as propriedades do cliente mais a propriedade "ativo" com o valor booleano true.') 
const listaCliente =  [
	{ id: 1, cliente: "João Celso de Souza", idade: 33 },
	{ id: 2, cliente: "Claudia Cipriano", idade: 28 },
	{ id: 3, cliente: "Edilene Souza Silva", idade: 41 },
	{ id: 4, cliente: "Maurício Gomes", idade: 17 },
	{ id: 5, cliente: "Claudia Cipriano", idade: 22 }
]
const novaListaClientes = listaCliente.map((elemento)=> {
    return {
        id: elemento.id,
        cliente:elemento.cliente,
        idade:elemento.idade,
        ativo:true
    }
})
console.log( novaListaClientes) 
console.log( '\n') 
console.log( 'Usando o array resultante do exercício 3, utilize o método filter para criar um novo array com os clientes com idade acima de 25 anos.') 
const acimaDe25 = novaListaClientes.filter(idade=>idade.idade>=25)
console.log( acimaDe25) 
console.log( '\n')