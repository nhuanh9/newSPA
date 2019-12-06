$(document).ready(function(){
  $(window).scroll(function(event){
    console.log($(window).scrollTop());
    if(eval($(window).scrollTop())>=120)
    {
      $(".navbar").css({
        position:"fixed",
        background:"rgb(255,106,2)",
        top: "0px",
        width: "100%"
      });
    }else{
      $(".navbar").css({
        position:"unset",
        width: "100%",
        background:"rgb(255,106,2)",
      });
    }
  });
});
