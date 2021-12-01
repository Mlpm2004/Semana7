const vetor= [{
  "name": "Afghanistan",
  "region": "Asia",
  "population": 38928341,
  "area": 652230.0
}, {
  "name": "Brazil",
  "region": "Americas",
  "population": 212559409,
  "area": 8515767.0
}, {
  "name": "China",
  "region": "Asia",
  "population": 1402112000,
  "area": 9640011.0
}, {
  "name": "Egypt",
  "region": "Africa",
  "population": 102334403,
  "area": 1002450.0
}, {
  "name": "Estonia",
  "region": "Europe",
  "population": 1331057,
  "area": 45227.0
}, {
  "name": "India",
  "region": "Asia",
  "population": 1380004385,
  "area": 3287590.0
}, {
  "name": "Malawi",
  "region": "Africa",
  "population": 19129955,
  "area": 118484.0
}, {
  "name": "Poland",
  "region": "Europe",
  "population": 37950802,
  "area": 312679.0
}, {
  "name": "Romania",
  "region": "Europe",
  "population": 19286123,
  "area": 238391.0
}]
console.log('Obtenha apenas os países que possuem população maior que 100.000.000.')
//Obtenha apenas os países que possuem população maior que 100.000.000.
const popMaior100Mil=vetor.filter(pais=>pais.population>100000000)
console.log(popMaior100Mil)
console.log('Obtenha um novo array que possui apenas o nome e a região de cada país.')
//Obtenha um novo array que possui apenas o nome e a região de cada país.
const nomeRegiao=vetor.map(pais => {
    return{
            nome:pais.name,
            regiao:pais.region
        }
})
console.log(nomeRegiao)
console.log('Confira se todos os países se encontram na Europa.')
//Confira se todos os países se encontram na Europa.
const europa=vetor.every(region=>region=='Europe')
console.log(europa)
console.log('Obtenha a média da população dos países da Europa.')
//Obtenha a média da população dos países da Europa.
const paisesEuropa= vetor.filter(pais=>pais.region=='Europe')
const mediaPopEuropa= paisesEuropa.reduce((total,atual)=>{return total+ +atual.population},0)/paisesEuropa.length
console.log(mediaPopEuropa)
console.log('Encontre o primeiro país que se encontra na África.')
//Encontre o primeiro país que se encontra na África.
const primeiroAfrica= vetor.find( (pais)=> {
  return pais.region === 'Africa';
})
console.log(primeiroAfrica.name)
console.log('Obtenha uma lista de todos os países que se encontram na Ásia.')
//Obtenha uma lista de todos os países que se encontram na Ásia.
const paisesAsia= vetor.filter(pais=>pais.region=='Asia')
console.log(paisesAsia)
console.log('Obtenha a soma da área de todos os países.')
//Obtenha a soma da área de todos os países.
const somaArea= vetor.reduce((total,atual)=>{return total+ +atual.area},0)
console.log(somaArea)

