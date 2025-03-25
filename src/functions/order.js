function order(str) {
	let orderedStrings = [];
	const words = str.split(" ");

	words.forEach((word) => {
		const wordIndex = word.match(/\d/);
		if (wordIndex) {
			orderedStrings[wordIndex[0]] = word;
		}
	});

	return orderedStrings.join(" ").trimStart();
}

export { order };
