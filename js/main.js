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

/* function timeConverter(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;
} */

/* function timeConverter(countdown) {
  (d = Math.floor(countdown / 86400000)),
    (h = Math.floor((countdown % 86400000) / 3600000)),
    (m = Math.floor((countdown % 3600000) / 60000)),
    (s = Math.floor((countdown % 60000) / 1000));
  return d + "Day(s) " + h + "Hour(s) " + m + "Minute(s) " + s + "Second(s)";
} */
//! Trovati i dati..ma adesso? come scalare ?
function timeConverter(countdown) {
  let milliseconds = Math.floor((countdown % 1000) / 100),
    seconds = Math.floor((countdown / 1000) % 60),
    minutes = Math.floor((countdown / (1000 * 60)) % 60),
    hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
console.log(timeConverter(countdown));
