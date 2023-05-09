document.getElementById("input").addEventListener("click", () => {
	/* Auto fill form */
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			testval: document.getElementById('test').value,
		}, function(response) {
			console.log(response.status);
		});
	});
});