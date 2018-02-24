chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
      chrome.tabs.remove(tabs[i].id);
    }
  });
  var millisecondsPerHour = 1000 * 60 * 60;
  var oneHourAgo = (new Date()).getTime() - millisecondsPerHour;
  var millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var oneWeekAgo = (new Date()).getTime() - millisecondsPerWeek;
  chrome.browsingData.remove({ "since": oneWeekAgo }, { "history": true });
  chrome.tabs.create({});
});
