// crear una funcion que reciba un nombre como parametro y devuelva un saludo con dicho nombre
// output -> 'Hola {alguien}, buenas noches'

function saludo(nombre){
    return Hola ${nombre}, buenas noches'
}
console.log(saludo('Annie'));



function greeting(name) {
    return `Hello ${name}, buenas noches` // undefined
}
const greetFer = greeting('Fers')
console.log(greetFer) // undefined

const nameXavy = 'Xavy'
const greetXavy = greeting(nameXavy)
console.log(greetXavy)

// Crear una función que me devuelva un nombre aleatorio de un arreglo

funtion number(num1, num2, num3) {
    return Math.random() * (num1 - num2) + num3;
}

// declarando/definiendo una funcion
function getNameRandom(){
    const arrayNames = ['Benja', 'Xavy', 'Annie', 'Hector', 'Jona', 'Cin']
    const min = 0
    const max = arrayNames.lenght
    const indexRandom = Math.floor(Math.random() * (max - min) + min)
    return arrayNames[indexRandom]
}

//Ejecucion de una funcion
getNameRandom(0)

console.log('Obteniendo un nombre random'
const nameRandom = getNameRandom()
console.log(nameRandom)

const firstGreet = greeting(getNameRandom()) // Pasando como argumento la ejecucion de una funcion
const secondGreet = greeting(nameRandom)

greeting(nameRandom)
greeting(nameRandom)

console.log(firstGreet)
console.log(secondGreet)
