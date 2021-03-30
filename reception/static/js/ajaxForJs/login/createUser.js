// 用于用户注册
document.write("<script src='static/configuration/ManConfig.js'></script>")


$(function(){
    $("#registerSubmit").click(function (){
        register();
    })    
        
})


function register() {
        var user_nickname = $("#registerUserName").val();
        var user_mail = $("#registerUserMail").val();
        var mail_code = $("#phone-code").val();
        var user_password = $("#registerUserPassword").val();


        var obj = {"user_nickname" : user_nickname, "user_mail" : user_mail, "mail_code" : mail_code, "user_password" : user_password};
        var myJson = JSON.stringify(obj);
        console.log(myJson);

        
        $.ajax({
            url: MyPathConfig("creatUser"),
            type:"post",
            contentType:"application/json;charset=utf-8", 
            data : myJson,
            success(res) {
                if(res.code == 200){
                    console.log(res);
                    $("#register").css("display","none");
                    $(".login-box").css("display","none");
                    $('.dim').removeClass('bur');

                }else if(res.code == 412){
                        
                        $("#registerError").html(res.message);
                        console.log(res.message);
                      
                }
            
            },
            error(error) {
                console.log(error);
            }
        })
        
    
}