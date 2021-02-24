// Insert After method
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode &&
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function imageLoad(url, elmImg) {
  var img = new Image();
  img.src =
    isSafari || document.body.classList.contains("nowebp")
      ? url
      : url
          .replace(".jpg", ".webp")
          .replace(".png", ".webp")
          .replace(".jpeg", ".webp")
          .replace(".gif", ".webp")
          .replace("/images", "/images/webp");

  img.onload = function () {
    // Canvas Element
    if (elmImg.tagName == "CANVAS") {
      // New Image Element
      var newImg = document.createElement("img");
      newImg.src = img.src;

      // New Image Title if exist or add Alt instead
      newImg.title = elmImg.dataset.title
        ? elmImg.dataset.title
        : elmImg.dataset.alt
        ? elmImg.dataset.alt
        : "";

      // New Image Alt if exist or add Title instead
      newImg.alt = elmImg.dataset.alt
        ? elmImg.dataset.alt
        : elmImg.dataset.title
        ? elmImg.title
        : "";

      // New Image Class if exist
      if (elmImg.dataset.class) {
        newImg.classList.add(elmImg.dataset.class);
      }

      // New Image Success Class so that it may not detect for lazyload
      newImg.classList.add("imgscs");

      // Appending New Image after Canvas
      insertAfter(elmImg, newImg);

      // Canvas Sibling noscript remove
      document.querySelector(".imgscs + noscript") &&
        document.querySelector(".imgscs + noscript").remove();

      // Removing Canvas
      elmImg.remove();

      return;
    }

    // Image Src replacing with the succesfully loaded image with placeholder image
    elmImg.src = img.src;

    // New Image Success Class so that it may not detect for lazyload
    elmImg.classList.add("imgscs");
  };

  img.onerror = function () {
    // Error Image Error Class so that it may not detect for lazyload
    elmImg.classList.add("imgerr");
  };
}

// Browser fully loaded state - Using ES6
document.addEventListener("readystatechange", function (e) {
  // Image Lazy Load
  $(window).on("scroll", function () {
    // Canvas Image
    document
      .querySelectorAll("[data-src]:not(.imgsrc):not(.imgerr),svg:not(.active)")
      .forEach(function (image) {
        if (
          image.parentNode.getBoundingClientRect().top * 1.1 +
            window.scrollY -
            window.outerHeight <
          $(window).scrollTop()
        ) {
          if (image.tagName == "svg") {
            // For Svg Animation
            image.classList.add("active");

            // Svg Trigger Event If Exist
            typeof svgLoaded !== "undefined" && image.dispatchEvent(svgLoaded);
          } else {
            imageLoad(image.dataset.src, image);
          }

          $(window).trigger("resize");
        }
      });
    // Background Image
    document.querySelector("[data-bgimage]") &&
      document.querySelectorAll("[data-bgimage]").forEach(function (bg) {
        if (
          bg.parentNode.getBoundingClientRect().top * 1.1 +
            window.scrollY -
            window.outerHeight <
          $(window).scrollTop()
        ) {
          bg.style.backgroundImage = "url(" + bg.dataset.bgimage + ")";
          delete bg.dataset.bgimage;
        }
      });
  });

  $(window).trigger("scroll");
});

$(document).on("lazyload", "[data-src]", function () {
  imageLoad($(this).attr("src"), $(this)[0]);
});

$(document).on("lazyload", "[data-bgimage]", function () {
  $(this).css("background-image", "url(" + $(this).data(bgimage) + ")");
  delete $(this)[0].dataset.bgimage;
});
