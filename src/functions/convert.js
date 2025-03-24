function toCamelCase(str) {
	let words = str.split("");

	words.forEach((char, index) => {
		if (char == "-" || char == "_") {
			words[index] = "";
			words[index + 1] = words[index + 1].toUpperCase();
		}
	});

	return words.join("");
}

export { toCamelCase };
