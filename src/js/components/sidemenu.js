const snbt = document.querySelector(".snbt")
const snv = document.querySelector(".snv")
const snvc = document.querySelector(".snvc")

snbt.addEventListener("click", () => {
  snv.style.display = "flex"

  setTimeout(() => {
    snv.classList.add("active")
  }, 100)

  stopBodyScrolling()
})

snvc.addEventListener("click", () => {
  snv.classList.remove("active")

  setTimeout(() => {
    snv.style.display = "none"
  }, 500)

  resetBodyScrolling()
})
