const nfl = document.querySelector(".nfld")
const nflEmail = nfl.querySelector("input[name='emailsubscribe']")
const nflBtn = nfl.querySelector(".btn")

const subscriptionForm = (r, a, s) => {
  const l = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
  const t = nflEmail
  if ("" == t.value)
    t.focus(),
      (nfl.style.border = "1px solid red"),
      alert("Please insert email address!")
  else if (0 == l.test(t.value))
    t.focus(),
      (nfl.style.border = "1px solid goldenrod"),
      alert("Invalid email address")
  else {
    fetch(`${app_url}newslettersignup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text-plain, */*",
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-TOKEN": csrf_token,
        credentials: "same-origin",
        _token: csrf_token,
      },
      body: JSON.stringify({
        work: "subscribe",
        email: t.value,
        page_id: r,
        type: a,
        link: s,
        _token: csrf_token,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json()
        throw new Error(res.status)
      })
      .then((data) => {
        if (data.status) {
          nfl.classList.add("hidden")
          document.querySelector(".nflsts").classList.add("hidden")
          setTimeout(() => {
            nfl.innerHTML = `<p>${data.msg}</p>`
            nfl.classList.remove("hidden")
            nfl.style.border = "none"
            document.querySelector(".nflsts").remove()
          }, 300)
        } else {
          const p = document.createElement("p")
          p.classList.add("nflsts")
          p.textContent = data.msg
          nfl.parentElement.appendChild(p)
          nfl.style.border = "1px solid goldenrod"
        }
      })
      .catch((err) => {
        const p = document.createElement("p")
        p.classList.add("nflsts")
        p.textContent = "Something went wrong !"
        nfl.parentElement.appendChild(p)
        nfl.style.border = "1px solid red"
      })
  }
}

nflEmail.addEventListener("keyup", (e) => {
  e.key === "Enter" && nflBtn.click()
})
