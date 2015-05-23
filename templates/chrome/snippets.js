chrome.runtime.sendMessage({
  type: 'messageOne',
  data: {
    mykey: 'myval'
  }
});

// Also, chrome.runtime.onMessage
chrome.runtime.onMessageExternal.addListener(function (msg, sender, reply) {
  switch (msg.type) {
    case 'messageOne':
      break;
  }
});

// Also, chrome.runtime.onConnect
chrome.runtime.onConnectExternal.addListener(function (port) {
  port.postMessage({
    type: 'messageOne'
  });
  port.onDisconnect.addListener;
  port.onMessage.addListener;
});


chrome.tabs.getSelected(function(currentTab) {
  var id = currentTab.id;
});


chrome.browserAction.setBadgeText({
  text: 'X'
});

chrome.browserAction.setBadgeBackgroundColor({
  color: '#3F3'
});


chrome.storage.sync.set({
  mydata: 'value'
});

chrome.storage.sync.set({
  myotherdata: 'value'
});

chrome.storage.sync.get(function (data) {
  // data = { mydata: value, myotherdata: value }
});