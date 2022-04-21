console.log('\nCreacion de un objeto vacio')
const obj = {}
console.log(obj)

console.log('\nCracion de un objeto con propiedades')
const obj2 = {
  name: 'Abdalan',
  age: 23
}
console.log(obj2)

console.log('\nCreacion de un objeto con propiedades diferentes')
const obj3 = {
  name: "Tulio",
  age: 2,
  language: [
   "Spanish",
    "English"
  ],
  address: {
    zip_code: "98653",
    street: "Dr. Vertiz 11 Benito Juarez",
    city: "EDMX"
  }
}
console.log(obj3)

console.log('\nCreacion de un objeto con metodos')
const obj4 = {
  name: 'abdalan',
  greet: function(){
    console.log(`${this.name} te dice hola`)
  }
}
obj4.greet()

console.log('\nCreacion de un objeto que reciba parametros')
const obj5 = {
  name: 'abdalan',
  greet: function(saludo){
    console.log(`${this.name} te dice ${saludo}`)
  }
}
obj5.greet('hola')