
// 用于验证用户的登陆信息

// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
    
    // 验证是否cookie里有用户信息，检验登陆状态
    var res= getCookie("user_data");
    if(res){
        res = JSON.parse(res);
        $("#boxed-btn4").css("display","none");
        //$("#personal-a").css("padding-right","0");
        $("#personal-ul").css("display","block");
        $("#personal span").html("");
        $("#personal span").append(res.user_name);
        $("#personal-img").attr("src",res.user_icon);
        return;
    }
    
     // 回车键登录
    $(document).keydown(function(event) {
        event = event || window.event; //window.event,是为了兼容IE
       //按下了回车键
       if (event.keyCode == 13) {
           if(res){
                sweetAlert({
                    title: "错误",
                    text: res.message,
                    type: "请勿重复登陆",
                    allowOutsideClick: true,
                    confirmButtonColor: "rgb(238,55,21)",
                    confirmButtonText :"确认",
                    timer :"3000"
                })
               return false;
           }
           login();
           myLogin();
       }
   }); 


    //  登录键登录
   $("#loginSubmit").click(function () {
        if(res){
            sweetAlert({
                title: "错误",
                text: res.message,
                type: "请勿重复登陆",
                allowOutsideClick: true,
                confirmButtonColor: "rgb(238,55,21)",
                confirmButtonText :"确认",
                timer :"3000"
            })
            return false;
        }
       login();
       myLogin();
   });

})
   

    

function login() {
    var loginUsername = $("#loginUsername").val();
    var loginPassword = $("#loginPassword").val();

    var obj = {"user_name" : loginUsername,"user_password" : loginPassword};
    var myJson = JSON.stringify(obj);

        $.ajax({
            url: MyPathConfig("login"),
            type:"post",
            headers:{
                "yjy":"touda"
            },
            contentType:"application/json;charset=utf-8", 
            data : myJson,
            // xhrFields: {
            //     withCredentials: true
            // },
            success(res) {
                if(res.code == 200){  
                    // 将后台传来的用户信息存到cookie里
                    var data = JSON.stringify(res.data)
                    setCookie("user_data", data)
                    setCookie("user_name", res.data.user_name);

                    sweetAlert({
                        title: "成功",
                        text: "登录成功",
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                      }, function(){
                        window.location.href = "index.html";
                      });
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



// 记住密码
function myLogin(){
      let username = $("#loginUsername").val(); //用户名
      let password = $("#loginPassword").val();
      
      
    //   alert("登录成功！！");
    //   //在返回登录成功的信息后
      
      remember = $("#remember-password").is(':checked') ? 1 : 0;
      //如果“记住我是被选中的，则保存姓名和密码信息”
      if (remember == 1) {
        setCookie("user_name", username);
        setCookie("password", password);
        ////  console.log(getCookie("user_name"));
        //如果“记住我是没被选中的，则移除之前已经保存过的信息。”
      } else {
        clearCookie('user_name');
        clearCookie('password');
      }
}

    // function status(){
    //     $("#loginUsername").click(function (){
    //         $("#loginUsername").blur(function(){
    //             var username = getCookie("user_name");
    //             checkbox = $("#remember-password").is(':checked') ? 1 : 0;
    //             //  console.log("wo被点了");
    //             if(username !=  $("#loginUsername").val()){
    //                 checkbox == 0;
    //                 $("#loginPassword").html() == "";
    //                 //  console.log("是的");
    //             }
    //         })
           
    //     })
    // }