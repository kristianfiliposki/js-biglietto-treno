const nkm=parseInt(prompt("inserisci i km che vuoi percorrere."));
const eta=parseInt(prompt("inserisci la tua eta."));
const price= nkm * 0.21
const oldprice=price  * 0.2;
const youngprice=price * 0.4;


if(eta < 18){
    document.getElementById("prezzo").innerHTML=oldprice;
} else if (eta > 18){
    document.getElementById("prezzo").innerHTML=youngprice;
}