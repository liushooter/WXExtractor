$(document).ready(function(){
  $("#articles").val(chrome.extension.getBackgroundPage().link_data);
});