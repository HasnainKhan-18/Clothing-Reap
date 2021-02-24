let xpandr = document.querySelector(".xpandr");
let textDefaultLenght = 100;

if (xpandr.dataset.maxtext !== undefined) {
  textDefaultLenght = parseInt(xpandr.dataset.maxtext);
}

if (xpandr.textContent.length > textDefaultLenght) {
  let xpandrBtn = document.createElement("a");
  xpandrBtn.classList.add("xpnbtn");
  xpandrBtn.href = "javascript:;";
  xpandrBtn.textContent = "Show More";

  let xpandrContent = document.createElement("span");
  xpandrContent.textContent = xpandr.textContent.substring(textDefaultLenght);

  let xpandrContentWrap = document.createElement("span");
  xpandrContentWrap.classList.add("xpncnt");
  xpandrContentWrap.appendChild(xpandrContent);
  xpandrContentWrap.appendChild(xpandrBtn);

  xpandr.innerHTML = `${xpandr.textContent.substring(
    0,
    textDefaultLenght
  )}<span class="dots">...</span>`;

  xpandr.appendChild(xpandrContentWrap);

  xpandr.classList.add("vXpandr");

  xpandrBtn.addEventListener("click", () => {
    xpandr.classList.toggle("active");
    xpandrBtn.textContent =
      xpandrBtn.textContent === "Show More" ? "Show Less" : "Show More";
  });
}
