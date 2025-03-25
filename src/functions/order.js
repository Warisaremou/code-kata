function order(str) {
	return str
		.split(" ")
		.sort((a, b) => {
			const regex = /\d/;
			return a.match(regex) - b.match(regex);
		})
		.join(" ");
}

export { order };
