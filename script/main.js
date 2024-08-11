function updateImage() {
  const image = document.getElementById("responsive-image");
  const width = window.innerWidth;

  if (width <= 320) {
    image.src = "img/mockup_sm.png";
  } else if (width <= 568) {
    image.src = "img/mockup_md.png";
  } else if (width <= 744) {
    image.src = "img/mockup_lg.png";
  }
}
window.addEventListener("load", updateImage);
window.addEventListener("resize", updateImage);

$(document).ready(function () {
  var slider = $(".slider");
  var cardWidth;

  function updateCardWidth() {
    cardWidth = $(".card").outerWidth(true);
    updateMaxScroll();
  }

  function updateMaxScroll() {
    slider.data("max-scroll", slider[0].scrollWidth - slider.outerWidth());
  }

  function scrollSlider(amount) {
    var leftPos = slider.scrollLeft();
    var maxScroll = slider.data("max-scroll");
    if (amount > 0 && leftPos < maxScroll) {
      slider.animate(
        { scrollLeft: Math.min(leftPos + amount, maxScroll) },
        300
      );
    } else if (amount < 0 && leftPos > 0) {
      slider.animate({ scrollLeft: Math.max(leftPos + amount, 0) }, 300);
    }
  }

  $(".next").click(function () {
    scrollSlider(cardWidth);
  });

  $(".prev").click(function () {
    scrollSlider(-cardWidth);
  });

  updateCardWidth();
  updateMaxScroll();

  $(window).resize(function () {
    updateCardWidth();
  });
});



$(document).ready(function () {
  var slider = $(".slider");
  var isDragging = false;
  var startX;
  var scrollLeft;

  slider.on("mousedown", function (e) {
    isDragging = true;
    startX = e.pageX - slider.offset().left;
    scrollLeft = slider.scrollLeft();
    slider.css("cursor", "grabbing");
    e.preventDefault();
  });

  $(window).on("mouseup", function () {
    isDragging = false;
    slider.css("cursor", "grab");
  });

  slider.on("mousemove", function (e) {
    if (!isDragging) return;
    e.preventDefault();
    var x = e.pageX - slider.offset().left;
    var walk = (x - startX);
    slider.scrollLeft(scrollLeft - walk);
  });

  slider.on("mouseleave", function () {
    isDragging = false;
    slider.css("cursor", "grab");
  });
});



