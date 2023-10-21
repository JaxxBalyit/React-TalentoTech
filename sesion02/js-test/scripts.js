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

for (let i = 0; i < 5; i++) {
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
fetch("https://api.randomuser.me/?nat=US&results=1").then((res) => {
	res.json().then((data) => {
		console.log(data)
	})
})
*/
