(() => {
	// make a loader div with id "loader", and basic styles
	let loaderDiv = document.createElement('div');
	loaderDiv.setAttribute("id", "loader");
	
	document.body.appendChild(loaderDiv);
	
	console.log("test");
})();