
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
    $("#submitBtn").click(function (){
        var user_name = getCookie("user_name");
        var password = getCookie("password");

        var beginning = $("#beginning-pas").val();
        var newPas = $("#new-pas").val();
        var confirm = $("#confirm-pas").val();
        if(beginning == "" || newPas == "" || confirm == ""){
            sweetAlert({
                title: "错误",
                text: "请您填写完整",
                type: "error",
                allowOutsideClick: true,
                confirmButtonColor: "rgb(238,55,21)",
                confirmButtonText :"确认",
                timer :"3000"
            })
            return false;
        }
        if(newPas != confirm || beginning != password) {
            sweetAlert({
                title: "错误",
                text: "更改密码有误",
                type: "error",
                allowOutsideClick: true,
                confirmButtonColor: "rgb(238,55,21)",
                confirmButtonText :"确认",
                timer :"3000"
            })
            return false;
        }
        var password = JSON.stringify({"user_name" : user_name,"enter_password" : beginning,"user_password" : confirm});
        console.log(password);
        $.ajax({
            url: MyPathConfig("updatePasswordByUserName"),
            type:"post",
            contentType:"application/json;charset=utf-8", 
            data : password,
            success(res) {
                if(res.code == 200){
                    sweetAlert({
                        title: "成功",
                        text: "提交表单成功",
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                      }, function(){
                        window.location.reload()
                        setCookie("password",confirm);
                      });
                   
                    
                }else if(res.code == 412){
                    console.log(res);
                    sweetAlert({
                        title: "错误",
                        text: res.message,
                        type: "error",
                        allowOutsideClick: true,
                        confirmButtonColor: "rgb(238,55,21)",
                        confirmButtonText :"确认",
                        timer :"3000"
                    })
                }else{
                    console.log(res);
                }
            },
            error(error) {
                console.log(error);
    
            }
        });
    
    })
})
