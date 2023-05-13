chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "changeFont") {
    // Change the font here
  }
});
