const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: [
      "js",
      "c#"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true
      }
    }
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: [
      "js"
    ],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: [
      "elixir"
    ],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false
      }
    }
  }
 ]

 //  Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
 explorers.forEach(name => console.log(name.name, '\n'))
 
 // Imprime el stack de cada explorer, usa FOR EACH
 explorers.forEach(explorer => console.log(explorer.name, explorer.stack, '\n'))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
// const list = explorers.map((view) => view)

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
const result = explorers.filter(word => word.stack.includes('js'));
console.log(result, '\n')

// Busca el primer explorer que sea de la CDMX, usa FIND
const found = explorers.find(element => element.city.includes('CDMX'));
console.log(found, '\n');

// Obtén la suma de todos los exercises_completed, usa REDUCE
const exercice = explorers.map((exer) => exer.exercises_completed)
const sum = exercice.reduce((acc, element) => acc + element, 0)
console.log(sum, '\n')

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
const exerFinish = explorers.map((exer) => exer.missions.frontend.exercisesFinished)
const exsiste = exerFinish.some((f) => f === true)
console.log('Exsiste un explorer que tiene la propiedad exercisesFinished en frontend como true: ', exsiste, '\n')

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
const finish = explorers.map((exer) => exer.missions.onboarding.isFinished)
const tiene = finish.every((done) => typeof done === true)
console.log('Todos los explores tienen el isFinised en true: ',tiene)