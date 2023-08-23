const myDate = new Date(); //DATA DI OGGI..
/* console.log(now); */
console.log(myDate.toISOString()); //stringa che serve
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
/* console.log(now.getTime() + " tempo dal 1 jan 1970");
console.log(now.getMilliseconds() + " millisecondi");
console.log(now.getSeconds() + " secondi");
console.log(now.getMinutes() + " minuti");
console.log(now.getHours() + " ore");
console.log(now.getDay() + " giorno della settimana da 0 a 6..");
console.log(now.getMonth() + " mese 0-11");
console.log(now.getDate() + " giorno del mese 1-31");
console.log(now.getFullYear() + " Anno");  */

// Ora attuale
/* function presentTime() {
  const now = new Date();
  console.log(now.getMilliseconds());
} */

//?Prova
const presentMilliseconds = myDate.getTime();
console.log(presentMilliseconds);

const tomorrowDate = new Date("2023-08-24T09:30:00");
console.log(tomorrowDate + " data di domani");

const tomorrowMilliseconds = tomorrowDate.getTime();
console.log(tomorrowMilliseconds);

let countdown = tomorrowMilliseconds - presentMilliseconds;
console.log(countdown);

//! Trovati i dati..ma adesso? come scalare ?

const timeRemain = setInterval(function () {
  countdown = countdown - 1000;
  let milliseconds = Math.floor((countdown % 1000) / 100),
    seconds = Math.floor((countdown / 1000) % 60),
    minutes = Math.floor((countdown / (1000 * 60)) % 60),
    hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("hours").innerHTML = hours;
  if (countdown == 0) {
    clearTimeout(timeRemain);
  }
}, 1000);
/* let resultsTimer = timeConverter(countdown);
  console.log(resultsTimer); */
