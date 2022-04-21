console.log('clase vacio')
class Persona {}
console.log(Persona)


console.log('crear un objeto a partir de una clase')
class Perro {}
const perro = new Perro
console.log(perro)


console.log('instanciar una clase con atributos')
class Student {
  constructor(name, age, grade){
    this.name = name
    this.age = age
    this.grade = grade
  }
}
const abdalan = new Student('Abdalan', 23, '4th')
console.log(abdalan)


console.log('metodo en una clase')
class Repo {
  constructor(name, author, language, stars){
    this.name = name
    this.author = author
    this.language = language
    this.stars = stars
  }
  getInfo(){
    return `Repo ${this.name} has ${this.stars}`
  }
}
const repo = new Repo('Ismael', 'Abdalan', 'Js', 4.5)
console.log(repo.getInfo())


console.log('Atributos por valores por defecto')
class PullRequest{
  constructor(repo, title, changed){
    this.repo = repo
    this.title = title
    this.changed = changed
    this.status = 'open'
    this.date = new Date()
  }
  getInfo(){
    return `Este repo: ${this.repo} (satus: ${this.status} and was created on ${this.date})`
  }
}
const sendRequest = new PullRequest('launchx', 'semana2', 90)
console.log(sendRequest.getInfo())


console.log('getters para acceder a los atributos')
class Dude{
  constructor(name, age, stack){
    this.name = name
    this.age = age
    this.stack = stack
    this.exer_completed = 0
    this.exer_todo = 99
  }
  get getExercise(){
    return this.exer_completed
  }
}
const done = new Dude('willy', 1, [])
console.log(done.getExercise)

class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 0
	  this.lives = 0
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

// Ejemplo 8: Métodos static nos ayudan a escribir métodos en una clase que podemos usar sin necesidad de instanciar algún objeto
class Toolbox {
  static getMostUsefulTools(){
    return ["Command line", "git", "Text Editor"]
  }
}

console.log("Ejemplo 8: Métodos static")
// Puedo llamar el método static directamente con el nombre de la clase
console.log(Toolbox.getMostUsefulTools())
// Si intentamos instanciar un objeto, no podremos llamar este método static
//const toolbox = new Toolbox()
//console.log(toolbox.getMostUsefulTools()) // is not a function

/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

// Ejemplo 10: Overrinding methods

class Explorer{
  constructor(name, username, mission){
   this.name = name
   this.username = username
   this.mission = mission
  }

  getNameAndUsername(){
   return `Explorer ${this. name}, username: ${this.username}`
  }
}

class Viajero extends Explorer {
  constructor(name, username, mission, cycle){
    super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
    this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
  }

  getGeneralInfo(){
    let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
    // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    return `${nameAndUsername}, Ciclo ${this.cycle}`
  }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")
console.log("Ejemplo 10: Overrinding methods")
console.log(viajero1)
console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija