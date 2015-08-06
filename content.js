$(document).ready(function(){
  var links = new Array();

  var current_link = window.location;

  function getPageCount(){
    var count = "10";
    var location = window.location;
    results = location.search.split("&");

    for (var i = 0; i < results.length; i++) {
      value = results[i];

      if(/count/.test(value)){
        count = value.split("=")[1];
      }
    }

    return count;
  }

  function generateHref(ele){
    var page_link = ele.attr('href');
    var values = page_link.split("&");

    for (var i = 0; i < values.length; i++) {
      value = values[i];

      if (/count/.test(value)) {
        values[i] = "count=50";
        break;
      }
    }

    return values.join("&");
  }

  function generateNextBtn(){
    var ele = $(".tab_nav:last");
    ele.after("<li class='zqw' style='float:left; left: 10px'><a href='javascript:;'>下一页</a></li>");

    $(".zqw").on('click', function(){
      $(".page_next")[0].dispatchEvent(new MouseEvent("click"));
    });
  }

  if (/masssendpage\?t=mass\/list/.test(current_link.href)){ //判断是否在已发送页面
    // 修改默认的最大 count 数量 为 50, 默认为 10
    // https://mp.weixin.qq.com/cgi-bin/masssendpage?t=mass/list&action=history&begin=0&count=20
    var ele = $(".tab_nav:last > a");
    var count = getPageCount(ele);
    var href = generateHref(ele);
    $(".tab_nav:last > a").html("已发送 ("+count+")").attr('href',href);
    generateNextBtn();
  }else {}

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
});
