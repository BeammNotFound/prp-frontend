
// 用于验证用户的登陆信息


document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")


$(function (){
    

    $("#personal-ul").css("display","none");

    // 验证是否cookie里有用户信息，检验登陆状态
    check();
    
     // 回车键登录
    $(document).keydown(function(event) {
        event = event || window.event; //window.event,是为了兼容IE
       //按下了回车键
       if (event.keyCode == 13) {
           login();
           myLogin();
       }
   }); 


    //  登录键登录
   $("#loginSubmit").click(function () {
       login();
       myLogin();

   });

})
   

    

function login() {
    //$.cookie("data", 111111, { expires: 7, path: '/' });
    let loginUsername = $("#loginUsername").val();
    let loginPassword = $("#loginPassword").val();

    var obj = {"user_name" : loginUsername,"user_password" : loginPassword};
    var myJson = JSON.stringify(obj);


        $.ajax({
            url: MyPathConfig("login"),
            // url: "/login",
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
                    //console.log(res.data);              
                    $(".login").css("display","none");
                    //移出高斯模糊
                    $(".login-box").css("display","none");
                    $('.dim').removeClass('bur');

                    // 将后台传来的用户信息存到cookie里
                    let data = JSON.stringify(res.data)
                    setCookie("user_data",data)
                    $("#boxed-btn4").css("display","none");
                    $("#personal span").html("");
                   

                    $("#personal-ul").css("display","block");
                    $("#personal span").append(res.data.user_name);
                    $("#personal-img").attr("src",res.data.user_icon);
                    
                
                    // console.log( getCookie("res"));
                }else if(res.code == 412){
                    $("#loginError").html(res.message);
                    //console.log(res.message);
                }
                
            },
            error(error) {
                console.log(error);
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
        //console.log(getCookie("user_name"));
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
    //             console.log("wo被点了");
    //             if(username !=  $("#loginUsername").val()){
    //                 checkbox == 0;
    //                 $("#loginPassword").html() == "";
    //                 console.log("是的");
    //             }
    //         })
           
    //     })
    // }