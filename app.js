const countdown = () => {
  const countDate = new Date("May 13, 2021 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how does time work

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Calculate

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const tetxMinute = Math.floor((gap % hour) / minute);
  const tetxSecond = Math.floor((gap % minute) / second);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = tetxMinute;
  document.querySelector(".second").innerHTML = tetxSecond;
};
setInterval(countdown, 1000);
