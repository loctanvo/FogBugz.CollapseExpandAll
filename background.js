var lastTabId = 0;
var tab_clicks = {};

chrome.tabs.onSelectionChanged.addListener(function(tabId) {
  lastTabId = tabId;
  chrome.pageAction.show(lastTabId);
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  lastTabId = tabs[0].id;
  chrome.pageAction.show(lastTabId);
});

chrome.pageAction.onClicked.addListener(function(tab) {
    alert("skjera?");
    kading();
});
