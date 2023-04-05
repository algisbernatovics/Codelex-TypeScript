export { };

const count = (str: string, wordToFind: string): number => {
    const arr: string[] = str.toLowerCase().split(' ')
    let count: number = 0
    arr.forEach(word => {
        if (word == wordToFind) {
            count++
        }
    });
    return count
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
