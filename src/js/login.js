//inputs y formulario

const form = document.querySelector("form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


form.addEventListener("submit", async (event) =>{
  event.preventDefault()
  const user = await validateEmail(email)
  if (user === false) {
    alert("el usuario no esta registrado")
  }else{
    if(user.password ===password.value){
      localStorage.setItem("userOnline", JSON.stringify(user))
      window.location.href = "./src/pages/dashboard.html"
    }else{
      alert("la contraseña es incorrecta")
    }
  }

})






async function validateEmail (email){
  const response = await fetch(`http://localhost:3000/users?email=${email.value}`)
  const data = await response.json()

  if (data.length > 0) {
    return data[0]
  }else{
    return false
  }
}