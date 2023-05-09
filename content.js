chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try {
            document.getElementById("email").value = request.testval;
            sendResponse({status: "Success!"});
        } catch (error) {
            console.log(error)
            sendResponse({status: "Exception occured"})
        }
    }
)