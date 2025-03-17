$(document).ready(function () {
  //top滑動效果
  $('.top a').click(function(event) {
    event.preventDefault();
    //animate可以滑動到指定的位置，scrollTop為0是最上面，1000是速度
    $('html,body').animate({
      scrollTop: 0
    }, 1000);
  });
});
