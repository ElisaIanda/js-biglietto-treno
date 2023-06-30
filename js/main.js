
const firstName = prompt ("Inserisci il tuo nome");
const lastName = prompt ("Inserisci il tuo cognome")
const kilometers = prompt("Quanti chilometri devi fare?");
const age = prompt("Quanti anni hai?");
const kmPrice = 0.21;
const ridePrice = (kilometers * kmPrice);

let minorAge = 20;
let overAge = 40;
let coupon = 0;
let finalPrice = 0;

document.getElementById("welcome-title").innerHTML = `Benvenuto ${firstName} ${lastName}!`
document.getElementById("name").innerHTML = ` ${firstName}`
document.getElementById("lastname").innerHTML = ` ${lastName}`
document.getElementById("user-age").innerHTML = ` ${age}`
document.getElementById("km").innerHTML = ` ${kilometers}`

switch (true){
    case age <= 18:
        coupon = (ridePrice / 100) * minorAge;
        finalPrice = (ridePrice - coupon).toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
        break;

    case age >= 65:
        coupon = (ridePrice / 100) * overAge;
        finalPrice = (ridePrice - coupon).toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
        break;

    default:
        finalPrice = ridePrice.toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
}

