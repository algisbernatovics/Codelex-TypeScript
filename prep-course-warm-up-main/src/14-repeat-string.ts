export { };

const repeatString = (str: string, n: number): string => {
    for (let i = 0; i < n; i++) {
        str += str.charAt(0)
    }
    return str
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
