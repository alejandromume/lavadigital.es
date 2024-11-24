export default function parallaxedEffect(e) {
  let amountMovedX = (e.clientX * -0.3 / 10);
  let amountMovedY = (e.clientY * -0.3 / 10);
  let parallaxedElements = document.getElementsByClassName("parallaxed");
  for (let i = 0; i < parallaxedElements.length; i++) {
    parallaxedElements[i].style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
  }
}