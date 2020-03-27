const abrirModal = document.querySelector(".btnNav")
const modal = document.querySelector(".modal-container")
const cerrarModal = document.querySelectorAll(".close")

abrirModal.onclick = () => {
    modal.classList.remove("noMostrar")
}

cerrarModal.forEach = boton => {
    boton[0].onclick = () => {
        modal.classList.add("noMostrar")
    }
    boton[1].onclick = () => {
        modal.classList.add("noMostrar")
    }    
}

const form = document.forms[1]
const newName = document.getElementById("name")
const newEmail = document.getElementById("email")
const newAdress = document.getElementById("adress")
const newPhone = document.getElementById("phone")
const tableBody = document.getElementById("table-content")

const newUser = {
    name: `${newName.value}`,
    email: `${newEmail.value}`,
    adress: `${newAdress.value}`,
    phone: `${newPhone.value}`,
}

form.onsubmit = e => {
    e.preventDefault()
    agregarUsuario()
}
agregarUsuario = () => {
fetch('https://tp-js-2-api-wjfqxquokl.now.sh/users', {
    method:'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newUser)
})
.then(res => res.json())
.then(data => {
    
    data.forEach(user => {
        let agregarUsuario = " ";
        agregarUsuario += `
        <td>${newUser.name}</td>
        <td>${newUser.email}</td>
        <td>${newUser.adress}</td>
        <td>${newUser.phone}</td>
        `
    })
    tableBody.innerHTML = agregarUsuario
}
)
}  
