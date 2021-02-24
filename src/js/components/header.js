const html = document.documentElement
const header = document.querySelector(".header")
const banner = document.querySelector(".hbnr,.gbnr")

const headerBgResize = () => {
  if (!document.querySelector("#main").style.display) {
    const headerH = header.getBoundingClientRect().height
    const bannerH = banner.getBoundingClientRect().height
    const bannerMT = parseInt(window.getComputedStyle(banner).marginTop)
    const offsetHeight = `${headerH + bannerH + bannerMT - 45}px`

    html.style.setProperty("--mbbgh", offsetHeight)
  }
}

window.addEventListener("load", headerBgResize)

document.addEventListener("DOMContentLoaded", headerBgResize)

window.addEventListener("readystatechange", headerBgResize)

window.addEventListener("resize", headerBgResize)
