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
const RATE_GBP_TO_USD: number = 1.21
const RATE_GBP_TO_BRL: number = 6.30
const FEE_PROC: number = 1.01

function convertToUSD(price: number, rate: number): string {
    const priceUSDconverted = price * rate
    const priceWithFee = addFee(priceUSDconverted)
    return formatPrice(priceWithFee)
}
// You are allowed to change this function
function convertToBRL(price: number, rate: number): string {
    const priceBRLconverted = price * rate
    const priceWithFee = addFee(priceBRLconverted)
    return formatPrice(priceWithFee)

}
function addFee(price: number): number {
    return price * FEE_PROC
}
function formatPrice(priceToFormat: number): string {
    return priceToFormat.toFixed(2)
}
const product = "You don't know JS";
const price = 12.5;
const priceInUSD = convertToUSD(price, RATE_GBP_TO_USD);
const priceInBRL = convertToBRL(price, RATE_GBP_TO_BRL);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
