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

        if(res.user_type == 2){
            $("#manage").css("display","block");
        }
        return;

        
    }else{
        $("#personal-a").attr("href", "login.html");
        $(".slicknav_arrow").css("display","none");
    }
    

})
