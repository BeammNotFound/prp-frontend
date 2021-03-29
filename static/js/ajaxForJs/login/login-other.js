document.write("<script src='static/configuration/myConfig.js'></script>")


// 用于验证用户的登陆信息
$(function (){
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
            type:"post",
            // headers:{
            //     "yjy":"touda"
            // },
            contentType:"application/json;charset=utf-8", 
            data : myJson,
            // xhrFields: {
            //     withCredentials: true
            // },
            success(res) {
                if(res.code == 200){  
                    //console.log(res.data);              
                    // $(".login").css("display","none");
                    // //移出高斯模糊
                    // $(".login-box").css("display","none");
                    // $('.dim').removeClass('bur');
                    window.location.href = "javascript:history.go(-1)";


                    // 将后台传来的用户信息存到cookie里
                    let data = JSON.stringify(res.data)
                    setCookie("user_data",data);
                    setCookie("user_id",data.user_id);

                    // $("#boxed-btn4").css("display","none");
                    // $("#personal span").html("");
                   

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

function  check(){
    let res= getCookie("user_data");
    if(res){
        res = JSON.parse(res);
        // $("#boxed-btn4").css("display","none");
        //$("#personal-a").css("padding-right","0");
        $("#personal-ul").css("display","block");
        $("#personal span").html("");
        $("#personal span").append(res.user_name);
        $("#personal-img").attr("src",res.user_icon)
        return;
    }else{
        $("#personal-a").attr("href","login-base.html")
    }
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
