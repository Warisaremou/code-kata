function getSum(a, b) {
	const maxValue = Math.max(a, b);
	const minValue = Math.min(a, b);

	return Array.from({ length: maxValue - minValue + 1 }, (_, index) => minValue + index).reduce(
		(acc, value) => acc + value,
		0
	);
}

export { getSum };
