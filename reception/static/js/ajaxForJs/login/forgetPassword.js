
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")



// 用于用户忘记密码
$(function (){
   
    $("#forgetSubmit").click(function () {
        console.log("111");
        forget();
    })

})
 
function forget() {
    var user_mail = $("#forgetUserMail").val();
    var mail_code = $(".forgetCode").val();
    var user_password = $("#forgetPassword").val();
    console.log(mail_code);
    var obj = {"user_mail" : user_mail,"mail_code" : mail_code,"user_password" : user_password};
    var jsonData = JSON.stringify(obj);
    console.log(jsonData);

    $.ajax({
        url: MyPathConfig("forgetPassword"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : jsonData,
        success(res) {
            if(res.code == 200){
                //console.log("111");
                $('.login-in').slideDown(200);
                $('.login-in').show();
                $('.register').hide();
                $('.forget').hide();
            }else if(res.code == 412){
                $("#forgetError").html(res.message);
                console.log(res.message);
            }
           
        
        },
        error(error) {
            console.log(error);

        }
    })
}

