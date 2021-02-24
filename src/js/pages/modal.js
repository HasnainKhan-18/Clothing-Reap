~include("../components/bodyScrollToggler.js")

function iosCopyToClipboard(el) {
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var oldContentEditable = el.contentEditable,
      oldReadOnly = el.readOnly,
      range = document.createRange()

    el.contentEditable = true
    el.readOnly = false
    range.selectNodeContents(el)

    var s = window.getSelection()
    s.removeAllRanges()
    s.addRange(range)

    el.setSelectionRange(0, 999999) // A big number, to cover anything that could be inside the element.

    el.contentEditable = oldContentEditable
    el.readOnly = oldReadOnly
    document.execCommand("copy")
  } else {
    code.select()
    document.execCommand("copy")
  }
}

const modal = document.querySelector(".modal")
const modalCloseBt = modal.querySelector(".m-clbt")
const modalFlow = modal.querySelector(".m-flow")
const terms = modal.querySelector(".cptb")
const termsContent = modal.querySelector(".cptcnt")
const code = modal.querySelector(".code")
const copy = modal.querySelector(".copy")
let modalVisible = true
const removeModal = (elm) => {
  elm.addEventListener("click", () => {
    modal.classList.add("fadeOut")
    resetBodyScrolling()
    setTimeout(() => {
      modal.remove()
    }, 700)
    modalVisible = false
  })
}
removeModal(modalCloseBt)
removeModal(modalFlow)

stopBodyScrolling()

window.addEventListener("resize", () => modalVisible && stopBodyScrolling())

// Deal Popup
terms &&
  terms.addEventListener("click", () => {
    if (!terms.classList.contains("active")) {
      terms.classList.add("active")
      const termsInner = termsContent.querySelector(".cptcin")

      if (termsContent.style.display === "block") {
        termsContent.style.height = "0px"

        setTimeout(() => {
          termsContent.setAttribute("style", "display:none")
        }, 500)
      } else {
        termsContent.style.display = "block"
        const marginTop = parseInt(
          window.getComputedStyle(termsInner).marginTop
        )
        const offsetHeight = termsInner.offsetHeight
        console.log("offsetHeight", offsetHeight)
        console.log("marginTop", marginTop)
        const totalHeight = `${marginTop + offsetHeight}px`
        termsContent.style.height = totalHeight
      }
      terms.classList.remove("active")
    }
  })

// Copy Code Button
copy &&
  copy.addEventListener("click", () => {
    if (!copy.classList.contains("active")) {
      copy.classList.add("active")
      iosCopyToClipboard(code)
      const copyText = copy.textContent
      copy.textContent = "Copied"
      setTimeout(() => {
        copy.textContent = copyText
        copy.classList.remove("active")
      }, 3000)
    }
  })
