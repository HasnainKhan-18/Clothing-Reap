// Global
~include("../global.js")
// --------------/

// Libraries
~include("../libraries/jquery.slim.js")
~include("../libraries/slick.js")
// --------------/

$(() => {
  $(".brnds").slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
  })
})
