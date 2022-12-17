/**  Given an array nums of size n, return the majority element.

 The majority element is the element that appears more than ⌊n / 2⌋ times. 
 You may assume that the majority element always exists in the array.

 Example 1:

  Input: nums = [3,2,3]
  Output: 3
 Example 2:

 Input: nums = [2,2,1,1,1,2,2]
 Output: 1
 */

// * SOLUTION:

const majorElem = (arr: number[]) => {
	interface elementType {
		[key: number]: number;
	}

	let elements: elementType = {};
	let count = 0;
	let majorel;

	for (const elem of arr) {
		elements[elem] = elements[elem] + 1 || 1;
	}

	for (const num in elements) {
		if (elements[num] > count) {
			count = elements[num];
			majorel = num;
		}
	}
	return majorel;
};

console.log(majorElem([3, 2, 3]), 3);
console.log(majorElem([2, 2, 1, 1, 1, 2, 2]), 2);
