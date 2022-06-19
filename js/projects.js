function anchor(url) {
  window.location.href = url;
}

$(document).ready(function () {
  const screenWidth = window.screen.availWidth;

  if (screenWidth <= 640) {
    console.log(true);
    $("#projectList").css("flex-direction", "column");
    $("#projectList").css("align-items", "center");
    $("#projectList").css("transform", "scale(1.5)");
    $("#projectList").css("margin", "170px, 120px");
  } else {
    $("#projectList").css("flex-direction", "row");
  }
});
