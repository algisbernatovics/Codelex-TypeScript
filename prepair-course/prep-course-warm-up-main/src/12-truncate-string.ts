export { };
function truncateString(str: String, length: number): string {
    return str.slice(0, length)
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
