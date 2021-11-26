const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

setInterval(showTime, 1000);
 function showTime() {
  const time = new Date();

  // secHand movement formula
  const seconds = time.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // minHand movement formula
  const mins = time.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  // hourHand movement formula
  const hours = time.getHours();
  const hoursDegrees = ((hours / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}


