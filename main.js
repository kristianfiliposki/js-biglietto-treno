let nameInput = document.querySelector("#name");
let kmInput = document.querySelector("#kilometres");
let ageInput = document.querySelector("#age");
let btn = document.querySelector("#generates");

btn.addEventListener("click", function() {
    console.log("L'utente ha scritto: " + nameInput.value);
    console.log("L'utente ha scritto: " + kmInput.value);
    console.log("L'utente ha scritto: " + ageInput.value);
});





/* const nkm=parseInt(prompt("inserisci i km che vuoi percorrere."));
const eta=parseInt(prompt("inserisci la tua eta."));
const price= nkm * pkm
const pkm=0.21

document.getElementById("prezzo").innerHTML= (price) ;
console.log(price)

if(eta <= 18){
    document.getElementById("prezzo").innerHTML= (price - (price  * 0.2)) ;
} 
else if (eta >= 65) {
    document.getElementById("prezzo").innerHTML= (price - (price  * 0.4)) ;
}



 */