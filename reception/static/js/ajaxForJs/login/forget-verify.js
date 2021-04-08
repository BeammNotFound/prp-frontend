
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


// document.write("<script src='static/js/login.js'></script>")
// //在忘记密码时发送验证码

// function forgetEmailCheck(){
//     var user_mail = $("#forgetUserMail").val();
    
//     var myJson = JSON.stringify({"user_mail" : user_mail});
//     $.ajax({
//         url: MyPathConfig("verifyMail"),
//         type:"post",
//         contentType:"application/json;charset=utf-8", 
//         data : myJson,
//         success(res) {
//             if(res.code == 200){                   
                
//             }else if(res.code == 412){
//                 sweetAlert({
//                     title: "错误",
//                     text: res.message,
//                     type: "error",
//                     allowOutsideClick: true,
//                     confirmButtonColor: "rgb(238,55,21)",
//                     confirmButtonText :"确认",
//                     timer :"3000"
//                 })
//                 $("#forgetUserMail").val("");
//             }
        
//         },
//         error: function (error) {
//             window.location.href = "../../../common/html/rec/recError500.html";
//         }
//     })
// }
