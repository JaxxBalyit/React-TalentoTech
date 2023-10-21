const input = document.querySelector("input")
const btn = document.querySelector("button")

const list = document.createElement("ul")
document.body.appendChild(list)

btn.addEventListener("click", () => {
	const num = parseInt(input.value)
	const li = document.createElement("li")
	const contadorPar = document.getElementById("pares")
	const contadorImpar = document.getElementById("impares")
	li.textContent = num
	list.append(li)
	if (num % 2 === 0) {
		contadorPar.textContent = parseInt(contadorPar.textContent) + 1
		li.style.color = "red"
		input.textContent = ""
	} else {
		contadorImpar.textContent = parseInt(contadorImpar.textContent) + 1
		li.style.color = "blue"
		input.textContent = ""
	}
})
