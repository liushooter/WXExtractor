$(document).ready(function(){
  
  var link_data = chrome.extension.getBackgroundPage().link_data;
  $("#articles").val(link_data);
});
