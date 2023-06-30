
const firstName = prompt ("Inserisci il tuo nome");
const lastName = prompt ("Inserisci il tuo cognome");
const age = prompt("Quanti anni hai?");
const km = prompt("Quanti chilometri devi fare?");
const kmPrice = 0.21;
const price = (km * kmPrice);

const minorAge = 20;
const overAge = 40;
let coupon = 0;
let finalPrice = 0;

document.getElementById("welcome-title").innerHTML = `Benvenuto ${firstName} ${lastName}!`
document.getElementById("name").innerHTML = ` ${firstName}`
document.getElementById("lastname").innerHTML = ` ${lastName}`
document.getElementById("user-age").innerHTML = ` ${age}`
document.getElementById("km").innerHTML = ` ${km}`

switch (true){
    case age <= 18:
        coupon = (price / 100) * minorAge;
        finalPrice = (price - coupon).toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
        break;

    case age >= 65:
        coupon = (price / 100) * overAge;
        finalPrice = (price - coupon).toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
        break;

    default:
        finalPrice = price.toFixed(2);
        document.getElementById("ticket").innerHTML = `Il costo del biglietto è di ${finalPrice}€`;
}

