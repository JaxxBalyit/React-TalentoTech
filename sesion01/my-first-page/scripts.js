const text = "Hola mundo"
const input = document.querySelector("#input")
const button = document.querySelector("#button")
const list = document.querySelector("#list")

button.addEventListener("click", () => {
	const li = document.createElement("li")
	li.textContent = input.value

	const checkbox = document.createElement("input")
	checkbox.type = "checkbox"
	li.appendChild(checkbox)
	checkbox.addEventListener("change", () => {
		if (checkbox.checked) {
			li.style.textDecoration = "line-through"
			alert("Tarea completada")
		} else {
			li.style.textDecoration = "none"
		}
	})

	const deleteButton = document.createElement("button")
	deleteButton.textContent = "Eliminar"
	li.appendChild(deleteButton)

	deleteButton.addEventListener("click", () => {
		list.removeChild(li)
	})

	list.appendChild(li)
})
