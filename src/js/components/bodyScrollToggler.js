const body = document.querySelector("body")
// Window Disable Scroll Function
const stopBodyScrolling = () => {
    body.setAttribute(
      "style",
      `width: ${window.innerWidth}px; height: 100vh; overflow: hidden`
    )
  },
  // Reset Window Scroll Function
  resetBodyScrolling = () => {
    body.setAttribute("style", "")
  }
