export { };

function onlyTheAces(arr: string[]): string[] {
    let result: string[] = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Ace") result.push(arr[i])
    }
    return result
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
