
window.onload=function()
{
	var register_btn = document.getElementById('register-btn');
	var forget_btn = document.getElementById('forget-btn');
	var rtimes = 60;
	var gtimes = 60;
	var timer = null;

	var login_in = document.getElementById("login-in");
	var register = document.getElementById("register");
	var login_forget = document.getElementById("login-forget");
	var boxed_btn = document.getElementById("boxed-btn4");
	var register_code = document.getElementById("register-code");
	var forget_code = document.getElementById("forget-code");

	
	// //登录界面居中显示
	// boxed_btn.onclick=function(){
	// 	login_in.style.top = (document.documentElement.clientHeight - (login_in.offsetHeight + 400)) / 2 +'px';
	// 	login_in.style.left = (document.documentElement.clientWidth - login_in.offsetWidth) / 2 +'px';
	// }
	// register_code.onclick=function(){
	// 	//  console.log(register.offsetHeight);
	// 	//  console.log(register.offsetWidth);
	// 	register.style.top = (document.documentElement.clientHeight - (register.offsetHeight + 500)) / 2 +'px';
	// 	register.style.left = (document.documentElement.clientWidth - register.offsetWidth) / 2 +'px';
	// }
	// forget_code.onclick=function(){
	// 	//  console.log(login_forget.offsetWidth);
	// 	//  console.log(login_forget.offsetHeight);
		
	// 	login_forget.style.top = (document.documentElement.clientHeight - (login_forget.offsetHeight + 434)) / 2 +'px';
	// 	login_forget.style.left = (document.documentElement.clientWidth - login_forget.offsetWidth) / 2 +'px';
	// }
	
	register_btn.onclick=function()
    {
		
		if($("#registerUserMail").val() == "" ){
			// alert("请您输入邮箱~");
			sweetAlert({
				title: "错误",
				text: "请您输入邮箱",
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
	    		register_btn.value=rtimes+'秒后重试';
	    		register_btn.disabled='disabled';
				rtimes--;
				register_btn.style.backgroundColor="#818181";

	    		if(rtimes<0)
	    		{
	    			clearInterval(timer);
	    			register_btn.value='发送验证码';
	    			rtimes=60;
					register_btn.removeAttribute('disabled');
					register_btn.style.backgroundColor="#EE3715";
	    		}

			},1000);
			
	}


	forget_btn.onclick=function()
    {
		if($("#registerUserMail").val() == "" ){
			// alert("请您输入邮箱~");
			sweetAlert({
				title: "错误",
				text: "请您输入邮箱",
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
	    		forget_btn.value=gtimes+'秒后重试';
	    		forget_btn.disabled='disabled';
				gtimes--;
				forget_btn.style.backgroundColor="#818181";

	    		if(gtimes<0)
	    		{
	    			clearInterval(timer);
	    			forget_btn.value='发送验证码';
	    			gtimes=60;
					forget_btn.removeAttribute('disabled');
					forget_btn.style.backgroundColor="#EE3715";
	    		}

	    	},1000);
	};


	
    // 登录界面
	$('.boxed-btn4').click(function(){
        $('.login-box').fadeIn(100);
        $('.login-in').slideDown(200);
        $('.register').hide();
        $('.forget').hide();
        $('.dim').addClass('bur');
      })

    //注册界面
      $('.register-code').click(function(){
		//   //  console.log("注册");
        $('.register').slideDown(200);
        $('.login-in').hide();
        $('.register').show();
      })

    //忘记密码界面
      $('.forget-code').click(function(){
        $('.forget').slideDown(200);
        $('.forget').show();
        $('.register').hide();
        $('.login-in').hide();
      })
    //登录返回
    $('.forget-return').click(function(){
      $('.login-in').slideDown(200);
       $('.login-in').show();
       $('.register').hide();
       $('.forget').hide();
    });

    $('.register-return').click(function(){
      $('.login-in').slideDown(200);
       $('.login-in').show();
       $('.register').hide();
       $('.forget').hide();
    });
    
     //关闭登录界面
    //   $('.login-box').click(function(){
    //     $('.login-box').fadeOut(100);
    //     $('.login').slideUp(200);
    //     $('.dim').removeClass('bur');
    //   })

};