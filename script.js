function firstChar(text) {
  // your code here
	let trimmedText=text.trim();
	return trimmedText.charAt(0);
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
