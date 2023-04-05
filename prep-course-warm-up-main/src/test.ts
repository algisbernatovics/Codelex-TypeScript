export { };

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

// You are allowed to change this function
const RATE_GBP_USD = 1.21
const RATE_GBP_BRL = 6.30

function currencyConverter(price: number, rate: number) {
    const priceConverted = price * rate;
    const priceWithFee = addFee(priceConverted);
    return formatPrice(priceWithFee);
}
function addFee(priceConverted: number) {
    return priceConverted * 1.01
}
function formatPrice(priceToFormat: number) {
    return priceToFormat.toFixed(2);
}
const product = "You don't know JS";
const price = 12.5;
const priceInUSD = currencyConverter(price, RATE_GBP_USD);
const priceInBRL = currencyConverter(price, RATE_GBP_BRL);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
