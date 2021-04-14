// 用于用户注册

// 用户注册
document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")


$(function(){
    $(document).keydown(function(event) {
        event = event || window.event; //window.event,是为了兼容IE
       //按下了回车键
       if (event.keyCode == 13) {
        register();
       }
   }); 


//    注册
    $("#registerSubmit").click(function (){
        register();
    })    
        
})


function register() {
    
        if($("#registerUserPassword").val() != $("#registerSurePassword").val() ){
            sweetAlert({
                title: "错误",
                text: "密码不一致",
                type: "error",
                allowOutsideClick: true,
                confirmButtonColor: "rgb(238,55,21)",
                confirmButtonText :"确认",
                timer :"3000"
            })
            return false
        }
        var user_nickname = $("#registerUserName").val();
        var user_mail = $("#registerUserMail").val();
        var mail_code = $("#phone-code").val();
        var user_password = $("#registerSurePassword").val();


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
                    sweetAlert({
                        title: "成功",
                        text: "注册成功",
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                        confirmButtonText :"确认",
                        timer :"5000"
                    });
                    window.location.href = "login.html"

                }else if(res.code == 412){
                    sweetAlert({
                        title: "错误",
                        text: res.message,
                        type: "error",
                        allowOutsideClick: true,
                        confirmButtonColor: "rgb(238,55,21)",
                        confirmButtonText :"确认",
                        timer :"3000"
                    })
                      
                }
            
            },
            error(error) {
                window.location.href = "../../../common/html/rec/recError500.html";
            }
        })
        
    
}