document.addEventListener("DOMContentLoaded", function() {
  var fontSelector = document.getElementById("fontSelector");
  fontSelector.addEventListener("change", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {message: "changeFont", font: fontSelector.value});
    });
  });
});
