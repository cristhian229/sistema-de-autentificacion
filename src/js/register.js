// el formulario y los inpputs

const form = document.getElementById("register-form")
const username = document.getElementById("username")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")

form.addEventListener("submit", async (event) =>{

  event.preventDefault()
  const checkPassword = validatePasswords(password, confirmPassword)
  const checkEmail = await validateEmail(email)

  if(checkPassword === true && checkEmail === true){
     await registerUser(username, lastName, email,password)
     window.location.href = "/"
  }else{
    alert("las contraseñas no coinciden o el email ya existe")
  }


})


//valida que las contraseñas sean iguales
function validatePasswords (password, confirmPassword) {
  if (password.value === confirmPassword.value) {
    return true
  } else {
    alert("no coinciden las contraseñas")
    return false

  }
}


async function validateEmail (email){
  const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
  const data = await response.json()

  if (data.length ===0) {
    return true
  }else{
    return false
  }
}


async function registerUser (username, lastName, email, password) {
  const newUser = {
    username: username.value.toLowerCase(),
    lastName: lastName.value.toLowerCase(),
    email: email.value,
    password:  password.value
  }
  const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    })
  }