
// 用于用户忘记密码
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")

$(function (){
    $("#forgetSubmit").click(function () {
        forget();
    })

})
 
function forget() {
    // 判断两次密码是否一致
    if($("#forgetPassword").val() != $("#forgetSurePassword").val() ){
        sweetAlert({
            title: "错误",
            text: "密码不一致",
            type: "error",
            allowOutsideClick: true,
            confirmButtonColor: "rgb(238,55,21)",
            confirmButtonText :"确认",
            timer :"3000"
        })
        return false;
    }

    var user_mail = $("#forgetUserMail").val();
    var mail_code = $("#forget-code").val();
    var user_password = $("#forgetPassword").val();
    var jsonData = JSON.stringify({"user_mail" : user_mail,"mail_code" : mail_code,"user_password" : user_password});

    $.ajax({
        url: MyPathConfig("forgetPassword"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : jsonData,
        success(res) {
            if(res.code == 200){
                sweetAlert({
                    title: "成功",
                    text: "修改成功",
                    type: "success",
                    confirmButtonText :"确认",
                    confirmButtonColor: "rgb(238,55,21)",
                    closeOnConfirm : false,
                    confirmButtonText :"确认",
                    timer :"5000"
                });
                window.location.href = "login.html";
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

