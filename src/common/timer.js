export default function timer(date) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  let countDown = new Date(date).getTime();

  setInterval(function () {
    let now = new Date().getTime()
    let distance = countDown - now;

    document.querySelector('#days').innerText = Math.floor(distance / (day));
    document.querySelector('#hours').innerText = Math.floor((distance % (day)) / (hour));
    document.querySelector('#minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.querySelector('#seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)
}