const user = localStorage.getItem("userOnline")

if (user === null) {
  window.location.href = "/"
}

const btnLogout = document.querySelector("#btnLogout")

btnLogout.addEventListener("click", () => {
  localStorage.removeItem("userOnline")
  window.location.href = "/"
})