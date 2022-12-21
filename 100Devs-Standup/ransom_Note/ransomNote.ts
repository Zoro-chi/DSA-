/**Given a magazine of words and a ransom note, determine if it’s possible to
 * “cut out” and create the ransom note from the magazine words. */

const magazine = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
	Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

//* SOLUTION:

const ransomNote = (note: string, mag: string) => {
	type cacheType = {
		[key: string]: number;
	};

	const magWords = mag.split(" ");
	const noteWords = note.split(" ");
	const magCache: cacheType = {};
	let answer = true;

	for (const word of magWords) {
		magCache[word] = magCache[word] + 1 || 1;
	}

	for (const word of noteWords) {
		if (magCache[word]) {
			magCache[word]--;
			if (magCache[word] < 0) return false;
		} else {
			answer = false;
		}
	}
	return answer;
};

console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
console.log(ransomNote("sit ad est sint in in in in", magazine), false);
