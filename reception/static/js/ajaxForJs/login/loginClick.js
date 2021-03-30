function click(){
    
    // // var $("#register_btn") = document.getElementById('register-btn');
    // var $("#forget_btn") = document.getElementById('forget-btn');
    // // var rtimes = 60;
    // // var gtimes = 60;
    // // var timer = null;
    
    
    
       

        $("#forget_btn").onclick=function()
        {
            var rtimes = 60;
            var gtimes = 60;
            var timer = null;
            if($("#registerUserMail").val() == "" ){
                sweetAlert({
                    title: "错误",
                    text: "请您输入邮箱~",
                    type: "error",
                    allowOutsideClick: true,
                    confirmButtonColor: "rgb(238,55,21)",
                    confirmButtonText :"确认",
                    timer :"3000"
                })
                return false;
            }
            timer=setInterval(function()
                {
                    $("#forget_btn").value=gtimes+'秒后重试';
                    $("#forget_btn").disabled='disabled';
                    gtimes--;
                    $("#forget_btn").style.backgroundColor="#818181";
    
                    if(gtimes<0)
                    {
                        clearInterval(timer);
                        $("#forget_btn").value='发送验证码';
                        gtimes=60;
                        $("#forget_btn").removeAttribute('disabled');
                        $("#forget_btn").style.backgroundColor="#EE3715";
                    }
    
                },1000);
        };
    
    
    
}
