chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      chrome.tabs.remove(tabs[i].id);
    }
  });
  var millisecondsPerHour = 1000 * 60 * 60;
  var oneHourAgo = (new Date()).getTime() - millisecondsPerHour;
  chrome.browsingData.removeHistory({
    "since": oneHourAgo
  });
  chrome.tabs.create({"url": "https://google.com"});
});
