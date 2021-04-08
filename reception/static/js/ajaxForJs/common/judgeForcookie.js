
// 判断用户的登录状态
$(function (){
   // checkIdentify();
   
    $("#personal").click(function () {
        var re = getCookie("user_data");
        checkIdentify();
       //var username;//登录用户的用户名
        

        //检查是否已登录和登录者的身份
        function checkIdentify() {
            
            if(re == null || re == "") {
                //如果用户还未登录，那么返回登录界面
                $("#login-in").css("display","block");
                $("#register").css("display","none");
                $("#forget-in").css("display","none");

                $(".login-box").css("display","block");
                $('.dim').addClass('bur');
                // $("#personal-a").attr("href","login-base.html");
                
            } else{
                $("#login-in").css("display","none");
                
                $(".login-box").css("display","none");
                $('.dim').removeClass('bur');
                $("#personal-a").attr("href","javascript:;")
            }
        }
        //在页面加载之前就要进行登陆者身份判断
        
    })
})