document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById("getArticleBtn");
  btn.addEventListener('click', click);
});

function click(e) {
  var eles = document.querySelectorAll(".title_wrp");
  var link = document.getElementById('saveAsCSV');
  link.href = "data:text/csv,";

  for (var i = 0; i < eles.length; i++) {
    link.href += eles[i].href + ",";
  }
}
