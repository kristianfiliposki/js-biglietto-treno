const nkm=parseInt(prompt("inserisci i km che vuoi percorrere."));
const eta=parseInt(prompt("inserisci la tua eta."));
const price= nkm * 0.21

if(eta <= 18){
    document.getElementById("prezzo").innerHTML= (price - (price  * 0.2)) ;
} 
else if (eta >= 65) {
    document.getElementById("prezzo").innerHTML= (price - (price  * 0.4)) ;
}

else{
    document.getElementById("prezzo").innerHTML= (price) ;
}

