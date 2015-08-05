var data = [];

chrome.runtime.onMessage.addListener(function(msg, sender, sendRespone){
  if(msg.action == "links" && msg.status == "ok") {
    var msg_data = msg.data.join("\n");
    data.push(msg_data);
  }

  chrome.extension.getBackgroundPage().link_data = data;
});
