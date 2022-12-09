// Count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// *SOLUTION

const countChars = (str: string) => {
	interface answerType {
		[key: string]: any;
	}

	let answer: answerType = {};

	for (const letter of str) {
		if (answer[letter]) {
			answer[letter]++;
		} else {
			answer[letter] = 1;
		}
	}
	return answer;
};

console.log(countChars("aba"), "{'a': 2, 'b': 1}");
console.log(countChars("dog"), "{'d': 1, 'o': 1, 'g': 1}");
console.log(countChars("abba"), "{'a': 2, 'b': 2}");
