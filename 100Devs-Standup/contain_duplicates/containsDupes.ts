/** Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true 
*/

//* SOLUTION:

const containsDupes = (arr: number[]) => {
	interface valuesTypes {
		[key: number]: any;
	}

	let values: valuesTypes = {};
	let answer = false;

	for (const number of arr) {
		if (values[number]) {
			values[number]++;
			answer = true;
			break;
		} else {
			values[number] = 1;
		}
	}
	return answer;
};

console.log(containsDupes([1, 2, 3, 1]), "true");
console.log(containsDupes([1, 2, 3, 4]), "false");
console.log(containsDupes([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), "true");
