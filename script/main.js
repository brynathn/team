function updateImage() {
  const image = document.getElementById("responsive-image");
  const width = window.innerWidth;

  if (width <= 320) {
    image.src = "/img/mockup_sm.png";
  } else if (width <= 568) {
    image.src = "/img/mockup_md.png";
  } else if (width <= 744) {
    image.src = "/img/mockup_lg.png";
  }
}
window.addEventListener("load", updateImage);
window.addEventListener("resize", updateImage);
