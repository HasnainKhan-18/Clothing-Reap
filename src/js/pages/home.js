// Global
~include("../global.js")
// --------------/

// Libraries
~include("../libraries/jquery.slim.js")
~include("../libraries/slick.js")
// --------------/

// Components
~include("../components/terms-pop.js")
~include("../components/pop-cpn.js")
// --------------/

$(() => {
  $(".hbsr").on("init", () => {
    $(".hbsr img").on("load", headerBgResize)
  })
  $(".hbsr").not(".slick-initialized").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    dots: true,
  })
})
