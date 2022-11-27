// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

// SOLUTION:

const removeDuplicate = (sentence: string) => {
    return sentence.split(" ").filter((word, index, arr) => word != arr[index - 1]).join(" ")
}

console.log(removeDuplicate( "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" ))