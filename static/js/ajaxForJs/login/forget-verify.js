document.write("<script src='static/configuration/myConfig.js'></script>")

document.write("<script src='static/js/login.js'></script>")
//在忘记密码时发送验证码

function forgetEmailCheck(){
    console.log(111);
    var user_mail = $("#forgetUserMail").val();
    var obj = {"user_mail" : user_mail};
    // if(user_mail == "" ){
    //     // alert("请您输入邮箱~");
    //     return false;
    // }
    var myJson = JSON.stringify(obj);
    $.ajax({
        url: MyPathConfig("verifyMail"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : myJson,
        success(res) {
            if(res.code == 200){                   
                console.log(res);
                
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
                $("#forgetUserMail").val("");
            }
        
        },
        error: function (error) {
          console.log(error);
        }
    })
}

    $("#forget-btn").click(function (){
        var user_mail = $("#forgetUserMail").val();
        var obj = {"user_mail" : user_mail};
        
        // if(user_mail == "" ){
        //     // alert("请您输入邮箱~");
        //     return false;
        // }

        var myJson = JSON.stringify(obj);
        console.log(myJson);

        $.ajax({
            url: MyPathConfig("verifyMail"),
            type:"post",
            contentType:"application/json;charset=utf-8", 
            data : myJson,
            success(res) {
                if(res.code == 200){                   
                   
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
            error: function (error) {
              console.log(error);
            }
        })
    })
