//TODO Recupero la data di oggi..
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

//TODO Converto la data di oggi in millisecondi
const presentMilliseconds = myDate.getTime();
console.log(presentMilliseconds);

//Todo creo la data di domani
const tomorrowDate = new Date("2023-08-24T09:30:00");
console.log(tomorrowDate + " data di domani");

//Todo converto la data di domani in millisecondi..
const tomorrowMilliseconds = tomorrowDate.getTime();
console.log(tomorrowMilliseconds);

//todo sottraggo i millisecondi di domani con quelli di oggi per trovare la
//todo quantità di tempo necessaria allo scadere.
let countdown = tomorrowMilliseconds - presentMilliseconds;
console.log(countdown);

//todo con una funzione setInterval ..
//todo scalo 1000 millisec. dal timer e ricavo ora, minuti e secondi.
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
//todo per finire, con una condizione, metto lo stop al timer..
/* let resultsTimer = timeConverter(countdown);
  console.log(resultsTimer); */
