export default function parallaxie(selector, speed = 0.8, startPosition) {
  let elements = document.querySelectorAll(selector);

  elements.forEach(elementBg => {
    if (elementBg) {
      let image = elementBg.getAttribute("data-background");
      if (!image) {
        image = window.getComputedStyle(elementBg).backgroundImage;
      }
      let position = elementBg.getBoundingClientRect().top * speed;

      elementBg.style.backgroundImage = `url("${image}")`;
      elementBg.style.backgroundSize = 'cover';
      elementBg.style.backgroundRepeat = 'no-repeat';
      elementBg.style.backgroundAttachment = 'fixed';
      elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;

      window.addEventListener('scroll', () => {
        position = elementBg.getBoundingClientRect().top * speed;
        elementBg.style.backgroundPosition = `center ${position}px`;
      });
    }
  })
}