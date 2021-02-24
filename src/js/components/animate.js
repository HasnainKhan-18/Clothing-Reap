var animationClasses = [
  "Left",
  "Right",
  "Top",
  "Bottom",
  "FadeIn",
  "FadeOut",
  "ZoomIn",
  "ZoomOut",
];

function animate(cls) {
  cls = ".to" + cls.join(",.to");
  document.querySelector(cls) &&
    document.querySelectorAll(cls).forEach(function (elm) {
      if (
        (elm.getBoundingClientRect().top + window.scrollY) * 1.1 -
          window.outerHeight <
        $(window).scrollTop()
      ) {
        animationClasses.forEach(function (animateClass) {
          if (elm.classList.contains("to" + animateClass)) {
            elm.classList.add("from" + animateClass);
            elm.classList.remove("to" + animateClass);
            return;
          }
        });
      }
    });
}