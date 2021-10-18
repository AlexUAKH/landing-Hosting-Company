// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  const bodyNode = document.body || document.getElementsByTagName("body")[0];
  let documentWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  if (documentWidth < 960) {
    moveNode("intro__img", "intro__body", 1);
  }

  burger.addEventListener("click", toggleBuger);
  window.addEventListener("resize", function () {
    documentWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
    console.log(documentWidth);
    if (documentWidth < 960) {
      moveNode("intro__img", "intro__body", 1);
    } else {
      document
        .getElementsByClassName("intro__container")[0]
        .appendChild(document.getElementsByClassName("intro__img")[0]);
    }
  });

  function toggleBuger() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    bodyNode.classList.toggle("lock");
  }
});

function moveNode(node, targetNode, targetOrder = 0) {
  const fragment = document.getElementsByClassName(node)[0];
  document
    .getElementsByClassName(targetNode)[0]
    .children[targetOrder].before(fragment);
}
