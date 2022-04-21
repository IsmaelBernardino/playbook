const array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
array.forEach(num => console.log(num))

let sum = 0;
const array2 = [1, 2, 3, 4, 5];
array2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
console.log("Ejemplo 3: Imprimiendo la lista de países en mayúsculas")
countries.forEach((contire) => console.log(contire.toUpperCase()))

const array4 = [1, 2, 3, 4, 5]
const arraySquare = array4.map(function(num){ return num * num})
// También puedes escribir la función como fat arrow
//const arraySquare = array4.map((num) => return num * num)
console.log("Ejemplo 4: Imprimiendo la lista de elementos al cuadrado")
console.log(arraySquare)

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log("Ejemplo 5: Uso de Map para convertir todos los nombres de una lista a minúsculas")
console.log(namesToUpperCase)

const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log("Ejemplo 7: Paises que terminan en i")
console.log(countriesEndsByia)

// Ejemplo 8: Filtrar una lista por condicional
const scores = [
  { name: 'A', score: 95 },
  { name: 'L', score: 98 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const scoresGreaterNinety = scores.filter((score) => score.score > 90)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterNinety)
const scoresLetter = scores.filter((letter) => letter.name === 'M')
console.log("Ejemplo 8: Filtrando elementos por letra")
console.log(scoresLetter)

// Ejemplo 9: Uso del reduce
const array9 = [1, 2, 3, 4, 5]
const result_of_reduce = array9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

// Ejemplo 12: Uso de find en una lista de objetos
const scores12 = [
  { name: 'A', score: 95 },
  { name: 'M', score: 80 },
  { name: 'E', score: 50 },
  { name: 'M', score: 85 },
  { name: 'J', score: 100 },
]

const score_less_than_80 = scores12.find((user) => user.score > 80)
console.log("Ejemplo 12. Name score found:" + score_less_than_80.name)

// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea mayor a 7 esta en la posición "+ result)

// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
console.log(products.sort())

const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]
users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending