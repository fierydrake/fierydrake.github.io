$(function() {
  $("#games ul li a").css('text-decoration', 'none');
  $("#games ul li:not(.nogame)").click(function(e) {
    window.location.href= $(this).find("span.name a").attr("href");
  });
  $("#games ul li:not(.nogame)").hover(function(e) {
    $(this).css('cursor', 'pointer');
  });

  $("#games .project a").css('text-decoration', 'none');
  $("#games .project").click(function(e) {
    window.location.href= $(this).find("span.name a").attr("href");
  });
  $("#games .project").hover(function(e) {
    $(this).css('cursor', 'pointer');
  });});
