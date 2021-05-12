// 检查登录状态
document.write("<script src='static/js/ajaxForJs/common/cookieUtil.js'></script>")

$(function (){
    var res= getCookie("user_data");

    if(res){
        res = JSON.parse(res);
        $("#boxed-btn4").css("display","none");
        //$("#personal-a").css("padding-right","0");
        $("#personal-ul").css("display","block");
        $("#personal span").html("");
        $("#personal span").append(res.user_name);
        $("#personal-img").attr("src",res.user_icon);
        $("#personal-a").attr("href", "javascript:;");
        //导航栏 
        var n=0;
        $('.slicknav_arrow').on('click', function(){
            n++;
            if(n % 2 !== 0){
                $('.slicknav_hidden').slideDown(200);
                $('.slicknav_arrow').html('-');
            }
            else{
                $('.slicknav_hidden').slideUp(200);
                $('.slicknav_arrow').html('+');
            }
        })
        // 判断是否为管理员身份
        if(res.user_type == 2){
            $(".manage").css("display","block");
        }
        return;

    }else{
        $("#personal-a").attr("href", "login.html");
        $(".slicknav_arrow").css("display","none");
        $(".personal ").children("a").attr("href","login.html");
    }
})
