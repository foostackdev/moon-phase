let today = new Date();
let moon = Moon.phase(
  today.getFullYear(),
  today.getMonth() + 1,
  today.getDate()
);

setText('#time', today.toLocaleTimeString('en-US'));

setText(
  '#date',
  `${new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(
    today
  )} ${today.toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`
);

setText('#moon', moon.display);

let descArr = [];
for (let s of moon.name.split('-')) {
  descArr.push(capitalizeFirstLetter(s));
}

setText('#description', `It's ${descArr.join(' ')}!`);

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

let intervalId = setInterval(function () {
  setText('#time', new Date().toLocaleTimeString('en-US'));
}, 1000);

function setText(selector, value) {
  document.querySelector(selector).textContent = value;
}
