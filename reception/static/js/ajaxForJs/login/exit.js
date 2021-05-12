$(function (){
    $(".exit-personal").click(function (event){
        clearCookieSingle("user_data");
        $("#personal-img").attr("src","img/动物.svg");
        $("#personal span").html("&nbsp;&nbsp;登陆/注册");
        $("#boxed-btn4").css("display","inline-block");
        $("#personal-ul").css("display","none");

        $("#small-personal span").html("&nbsp;&nbsp;登陆/注册");
        $("#image").attr("src","src","img/动物.svg");

        window.location.reload();
        event.stopPropagation();
    })
})