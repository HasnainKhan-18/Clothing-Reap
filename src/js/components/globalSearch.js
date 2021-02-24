const gSch = document.querySelector(".gsch")
const gsFld = gSch.querySelector(".gsform input")
const gsBtn = gSch.querySelector(".gsbtn")
const gsRlts = gSch.querySelector(".gsrlts")
const gsToggler = document.querySelectorAll(".sbt, .gsov, .gbsch")
const gsrbdw = gSch.querySelector(".gsrbdw")
const gsrctw = gSch.querySelector(".gsrctw")

const redirectSearchPage = () =>
  (location.href = `${app_url}storesearch?q=${gsFld.value}`)

const searchResult = () => {
  fetch(`${app_url}getSearch`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": csrf_token,
      credentials: "same-origin",
      _token: csrf_token,
    },
    body: JSON.stringify({ search_keyword: gsFld.value, _token: csrf_token }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error(res.status)
      }
    })
    .then((data) => {
      gsrbdw.innerHTML = ""
      gsrctw.innerHTML = ""
      data.stores.forEach((store) => {
        gsrbdw.innerHTML = `${gsrbdw.innerHTML}<a href="${app_url}${store.slug}"><img src="${app_url}image/${store.image}" decoding="async" loading="lazy"><span>${store.name}</span></a>`
      })
      data.categories.forEach((cat) => {
        gsrctw.innerHTML = `${gsrctw.innerHTML}<a href="${app_url}${cat.slug}">${cat.name} <span>View ${cat.total_stores} stores</span></a>`
      })
    })
    .catch((err) => {
      throw new Error(err)
    })
}

gsFld.addEventListener("keyup", (e) => {
  // Global Search Button Toggle Show/Hide
  if (gsFld.value.length > 0) {
    gsBtn.classList.add("active")
    gsRlts.classList.add("active")
    gsRlts.style.maxHeight = gSch.clientHeight - 120 + "px"
    // Redirect To Search Page If `Enter` Pressed
    if (e.key === "Enter") {
      redirectSearchPage()
    } else if (e.key === "Esc") {
      gSch.classList.add("active")
    } else {
      searchResult()
    }
  } else {
    gsRlts.style.maxHeight = "0px"
    gsRlts.classList.remove("active")
    gsBtn.classList.remove("active")
  }
})

// Toogle Global Search Form
gsToggler.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!gSch.classList.contains("isToggled")) {
      gSch.classList.add("isToggled")
      if (gSch.classList.contains("active")) {
        gSch.classList.remove("active")
        setTimeout(() => {
          gSch.style.display = "none"
        }, 500)
      } else {
        gSch.style.display = "flex"
        gSch.style.display === "flex" &&
          setTimeout(() => {
            gSch.classList.add("active")
          }, 100)
      }
      gSch.classList.remove("isToggled")
    }
  })
})
