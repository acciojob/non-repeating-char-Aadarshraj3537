function firstNonRepeatedChar(s) {
    let charCount = {};

    // Count occurrences of each character
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeated character exists
}

function findFirstNonRepeated() {
    let input = document.getElementById("inputString").value;
    let result = firstNonRepeatedChar(input);
    document.getElementById("result").textContent = result !== null 
        ? `First non-repeating character: ${result}` 
        : "No non-repeating character found";
}
