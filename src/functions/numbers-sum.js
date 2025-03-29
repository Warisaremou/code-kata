function getSum(a, b) {
	if (a > b) [b, a] = [a, b];
	// Method 1 using Array.from() and reduce()
	// return Array.from({ length: b - a + 1 }, (_, index) => a + index).reduce((acc, value) => acc + value, 0);
	// Method 2 using formula for the sum of the terms of an arithmetic sequence: S = number_of_terms * (a + b) / 2
	return ((b - a + 1) * (a + b)) / 2;
}

export { getSum };
