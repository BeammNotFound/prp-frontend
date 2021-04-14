$(function (){
    $("#exit-personal").click(function (event){
        ////  console.log(1111);
        clearCookieSingle("user_data");
        $("#personal-img").attr("src","img/动物.svg");
        $("#personal span").html("&nbsp;&nbsp;登陆/注册");
        $("#boxed-btn4").css("display","inline-block");
        $("#personal-ul").css("display","none");
        window.location.reload();
        event.stopPropagation();
    })
})