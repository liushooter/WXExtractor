var wpRef = new Firebase("https://fiery-fire-7269.firebaseio.com/wp")
var newChildRef = wpRef.push();

$(document).ready(function(){
  var links = new Array();

  $(".title_wrp").each(function(){
    var href = $(this).attr('href');

    links.push(href);
  })

// 发送消息
  chrome.runtime.sendMessage({
    action: "links",
    status: "ok",
    data: links
  });

  newChildRef.set({
    "wx_url": links
  });

});
