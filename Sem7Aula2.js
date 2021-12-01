const frameworks = ["1","2","3"]
const [,,react]=frameworks
console.log(react)


const personagem = {
    nome: "Tanto Faz",
    nascimento: "data de hoje",
    familia : {
        esposa : "raimunda",
        melhoramigo: "cachorro"

}}
const historia= (  {nome,familia:{esposa,melhoramigo}})=> {
    return `Meu nome é ${nome} e sou casado com a ${esposa}. Gosto de ir em aventuras com o meu melhor amigo ${melhoramigo}`
}
//historia(personagem)
console.log(historia(personagem))


const frutas=["morango","pessego","banana"]
const legumes = ["cenoura","batata", "abobrinha"]
const alimentos = [...frutas,...legumes]
console.log(alimentos)

const usuario = {
    nome:"joana",
    sobrenome: "Carvalho",
    interesses: ["leitura","jardinagem", "IOT"],
    familia:{pai:"Claudio" , mae: "Odete", irma:"Lorena"}
}
const hello = (  {nome,sobrenome,interesses:[leitura],familia:{mae}})=> {
    return `Olá, meu nome é ${nome}  ${sobrenome} e meu principal hobbie é ${leitura}. O nome da minha mãe é ${mae}`
}
//historia(personagem)
console.log(hello(usuario))




