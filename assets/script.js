/* DESCRIZIONE ESERCIZIO
Il programma dovrà chiedere all'utente:

  //il numero di chilometri che vuole percorrere
  // l'età del passeggero.

 Sulla base di queste informazioni dovrà 
 calcolare il prezzo totale del viaggio.

 Queste sono le regole:

  //il prezzo del biglietto è definito in base ai km (0.21 € al km)
  //va applicato uno sconto del 20% per i minorenni
  //va applicato uno sconto del 40% per gli over 65 (fortunelli).

 L'output del prezzo finale va stampata in pagina assicurandoci
 sia leggibile da un essere umano 
(massimo due cifre decimali, per indicare centesimi sul prezzo).

   // guida usata :(https://stackoverflow.com/questions/37593889/calculate-percentage-in-javascript)
*/

// COSA CI SERVE:
// const / let,
//prompt
// if / else

//Viene attivato il pulsante genera

document.querySelector("#start").addEventListener("click", function (event) {
  event.preventDefault();

  // chiedere all'utente il nome e cognome

  const fullname = document.getElementById("fullnameform").value;

  // chiedere all'utente il numero dei km da percorrere

  const km = parseFloat(document.getElementById("kmform").value);

  // chiedere all'utente l'età

  const age = parseInt(document.getElementById("ageform").value);

  // Controllare che siano numeri quelli inseriti

  if (isNaN(km) || isNaN(age)) {
    document.getElementById("error").innerHTML = `INSERIRE I DATI `;
  } else {
    // Calcolare il prezzo del biglietto in base hai km (0,21 euro al km)
    let price = km * 0.21;
    let coupon = 0;

    if (age < 18) {
      //se l'età è minore di 18 anni scontare il 20%
      coupon = 20;
      document.getElementById("offerta").innerHTML = "20%";
      document.getElementById("carrozza").innerHTML = "1";
      document.getElementById("codice").innerHTML = "875628";
    } else if (age > 65) {
      // se l'età e maggiore di 65 anni scontare del 40%
      coupon = 40;
      document.getElementById("offerta").innerHTML = "40%";
      document.getElementById("carrozza").innerHTML = "10";
      document.getElementById("codice").innerHTML = "3628420";
    } else {
      document.getElementById("offerta").innerHTML = "0%";
      document.getElementById("carrozza").innerHTML = "5";
      document.getElementById("codice").innerHTML = "1938389";
    }

    // calcolare prezzo con coupon
    priceTot = price * ((100 - coupon) / 100);
    console.log(offerta);

    // risultati in html
    document.getElementById("nameUser").innerHTML = fullname;

    // far vedere i due decimali

    document.getElementById(
      "costo"
    ).innerHTML = `Il prezzo del biglietto è: ${priceTot.toFixed(2)} €`;
    // sezione biglietto visualizzabile
    //document.getElementById("ticketTrain").style.display = "block";
    document.getElementById("ticketTrain").classList.remove("d-none");
  }
});
document.querySelector("#reset").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("ticketTrain").classList.add("d-none");

  document.getElementById("fullnameform").value = "";
  document.getElementById("kmform").value = "";
  document.getElementById("ageform").value = "";
});
