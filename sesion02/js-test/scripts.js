// Ejercicio 1: Variables
/*
let text = "hola"

if(true){
	let text = "Mundo"
	console.log(text)
}

console.log(text)
*/

// Ejercicio 2: Ciclos
/*
const container = document.getElementById("container")

for (let i = 0; i < 5: i++) {
	const div = document.createElement("div")
	div.style.height = "100px"
	div.style.width = "100px"
	div.style.margin = "10px"
	div.style.backgroundColor = "green"

	container.appendChild(div)
	div.addEventListener("click", () => {
		alert("Soy el div #: " + i)
	})
}
*/

// Ejercicio 3: Funciones declarativas
/*
holaMundo("Emmanuel")
function holaMundo(nombre) {
	alert(`Hola, ${nombre}`)
}
*/

// Ejercicio 4: Funciones expresivas
/*
const holaMundo = function (nombre) {
	alert(`Hola, ${nombre}`)
}
holaMundo("Emmanuel")
*/

// Ejercicio 5: Funciones flecha
/*
const holaMundo = (nombre) => {
	alert(`Hola, ${nombre}`)
}
holaMundo("Emmanuel")
*/

// Ejercicio 6: Funciones flecha con contexto y desestructuración
/*
const tahoe = {
	name: "Tahoe",
	getFormatedTitle: function () {
		alert(this.name.toUpperCase())
	},
	getFormatedTitleDelay: function () {
		// Arrow Function que protege el contexto
		setTimeout(() => {
			alert(this.name.toUpperCase())
		}, 3000)
	},
}
// Desestructuración de objetos
const { name, getFormatedTitle } = tahoe
tahoe.getFormatedTitle()
getFormatedTitle()
*/

// Ejercicio 7: Desestructuración anidada
/*
const person = {
	name: "Emmanuel",
	age: 22,
	address: {
		street: "Calle Juanita",
		number: 547,
		city: "León",
	},
}
const {
	address: { city },
} = person
alert(city)

const printAddress = ({ address: { street, number, city } }) => {
	alert(`Mi dirección es: ${street} ${number}, ${city}`)
}
*/

// Ejercicio 8: Operador de propagación (spread operator)
/*
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]
const invArr3 = [...arr2, ...arr1]
console.log(arr3)
console.log(invArr3)

const personalData = {
	name: "Emmanuel",
	age: 22,
}

const contactData = {
	email: "pepito@hola.com",
	phone: "4771234567",
}

const completeData = {
	...personalData,
	...contactData,
}
console.log(completeData)

const completeData2 = { ...completeData, phone: "7845123652" }
console.log(completeData2)
*/

// Ejercicio 9: Promesas y fetch
/*
let errorMessage = "Ocurrió un error al traer la frase"
fetch("https://quote-garden.onrender.com/api/v3/quotes/random")
	.then((response) => {
		if (response.status === 404) {
			errorMessage = "No se encontró la frase"
		}
		response.json()
	})
	.then((data) => {
		const p = document.getElementById("quote")
		p.innerText = data.data[0].quoteText
	})
	.catch((error) => {
		alert(errorMessage)
		console.log(error)
	})
	.finally(() => {
		console.log("Se terminó de ejecutar el fetch")
	})
*/

// Ejercicio 10: Async/Await
/*
let errorMessage = "Ocurrió un error al traer la información."
const getQuote = async () => {
	try {
		const res = await fetch(
			"https://quote-garden.onrender.com/api/v3/quotes/random32132"
		)
		if (res.status === 404) {
			errorMessage = "No se encontró la frase (404)"
		}
		const data = await res.json()
		const p = document.getElementById("quote")
		p.innerText = data.data[0].quoteText
	} catch (e) {
		alert(errorMessage)
		console.log(e)
	} finally {
		console.log("Se terminó de ejecutar el fetch")
	}
}
getQuote()
*/

// Ejercicio 11: Filter
/*
const names = ["José", "Christian", "Eduardo", "Jaime", "Uriel", "Alejandro"]
const namesWithJ = names.filter((name) => {
	console.log(name, name.toUpperCase().includes("J"))
	return name.toUpperCase().includes("J")
})
console.log(namesWithJ)
const users = [
	{
		name: "José",
		age: 25,
	},
	{
		name: "Christian",
		age: 18,
	},
	{
		name: "Eduardo",
		age: 29,
	},
	{
		name: "Jaime",
		age: 23,
	},
	{
		name: "Uriel",
		age: 30,
	},
	{
		name: "Alejandro",
		age: 35,
	},
]
const usersUnder25 = users.filter((user) => user.age <= 25)
const userUriel = users.find((user) => user.name === "Uriel")
const index = users.findIndex((user) => user.name === "Uriel")
console.log(index)
*/

// Ejercicio 12: Map
/*
const users = [
	{
		name: "José",
		age: 25,
	},
	{
		name: "Christian",
		age: 18,
	},
	{
		name: "Eduardo",
		age: 29,
	},
	{
		name: "Jaime",
		age: 23,
	},
	{
		name: "Uriel",
		age: 30,
	},
	{
		name: "Alejandro",
		age: 35,
	},
]
const ages = users.map((user) => user.age)
const container = document.getElementById("container")
const elements = users.map((user) => {
	const div = document.createElement("div")
	div.innerText = `Nombre: ${user.name}, Edad: ${user.age}`
	return div
})
container.append(...elements)
*/

// Ejercicio 13: Reduce
/*
const names = ["José", "Christian", "Eduardo", "Jaime", "Uriel", "Alejandro"]
const allNames = names.reduce((prev, current) => {
	if (current === "Uriel") {
		return prev + ", Maestro " + current
	} else {
		return prev + ", Alumno " + current
	}
}, "")
console.log(allNames)
const ages = [25, 18, 29, 23, 30, 35, 50, 19, 25, 31]
const maxAge = ages.reduce((prev, current) => {
	if (current > prev) {
		return current
	} else {
		return prev
	}
}, 0)
const sumAges = ages.reduce((prev, current) => {
	console.log(`${prev} + ${current} = ${prev + current}`)
	return prev + current
}, 0)
console.log(sumAges)
*/

// Ejercicio 14: Higher Order Functions
/*
const invokeIf = (condition, fnTrue, fnFalse) => {
	if (condition) {
		fnTrue()
	} else {
		fnFalse()
	}
}
const success = () => alert("La condición se cumplió")
const fail = () => alert("La condición falló")
const is2023 = new Date().getFullYear() === 2023
const isFebruary = new Date().getMonth() === 1
invokeIf(isFebruary, success, fail)
*/