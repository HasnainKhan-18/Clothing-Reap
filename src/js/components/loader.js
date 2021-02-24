/**
 * Loader Library
 */
~include("../libraries/loadingbar.js")
// ------------------------------------------------------------------------------/

/**
 * Loading Progressbar
 */
let loadingProgress = 0
const bar1 = new ldBar(".ldBar")
/* ldBar stored in the element */
const bar2 = document.querySelector(".ldBar").ldBar
const loaded = new Event("loaded")
const main = document.getElementById("main")
const loader = document.querySelector(".loader")

function incrementLoader(i) {
  loadingProgress += i
  bar1.set(loadingProgress)
}

// ------------------------------------------------------------------------------/

/**
 * Initiate Loader
 */
main.addEventListener("loaded", () => {
  // If file loaded jquery will work then
  if (loadingProgress === 100) {
    main.removeAttribute("style")
    loader.classList.add("hide")
  }
})

document.onload = () => {
  incrementLoader(25)
}

document.querySelectorAll("link[rel='preload']")

document.addEventListener("readystatechange", () => {
  incrementLoader(100)
  main.dispatchEvent(loaded)
})
// ------------------------------------------------------------------------------/

/**
 * Cursor
 */
const cursor = document.querySelector(".cursor")
document.querySelector("body").addEventListener("mousemove", (e) => {
  const left = e.pageX - 25
  const top = e.pageY - 25
  document
    .querySelector(".cursor")
    .setAttribute("style", "top:" + top + "px;left:" + left + "px;")
})
// ------------------------------------------------------------------------------/

document.addEventListener("mouseover", function () {
  document
    .querySelectorAll(
      "a:not(.mtrged),button:not(.mtrged),*[role='button']:not(.mtrged),.loader:not(.mtrged),input:not(.mtrged),textarea:not(.mtrged),label:not(.mtrged)"
    )
    .forEach((btn) => {
      btn.classList.add("mtrged")
      btn.addEventListener("mouseover", () => {
        cursor.classList.add("active")
      })
      btn.addEventListener("mouseout", () => {
        cursor.classList.remove("active")
      })
    })
})
