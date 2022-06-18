function age() {
  const year = new Date().getFullYear();
  return year - 2005;
}

console.log(age());

$(document).ready(function () {
  $("#pfpborder").hover(
    //on hover
    function () {
      // $("img.pfp").attr("src", "/resources/img/pfp.png");
      $("img.pfp").fadeIn(750);
    },

    //callback
    function () {
      // $("img.pfp").attr("src", "/resources/img/irlpfp.png");
      $("img.pfp").fadeOut(750);
    }
  );
});
