chrome.runtime.onMessage.addListener(function(msg, sender, sendRespone){
  if(msg.action == "links" && msg.status == "ok") {
    chrome.extension.getBackgroundPage().link_data = msg.data.join("\n");
  }
});
