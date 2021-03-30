document.write("<script src='static/configuration/ManConfig.js'></script>")

$(function (){
    $("#saveBtn").click(function (){
        var data = JSON.parse(getCookie("user_data"));
        var icon = data.user_icon;
        var user_city = data.user_city;
        var user_address = data.user_address;
        var user_mail = data.user_mail;
        var user_password = data.user_password;
        var user_type = data.user_type;

        var id = data.user_id;
        var user_name = data.user_name;
        var nickname = $("#nickname").val();
        var sex = $('input:radio[name="sex"]:checked').val();
        
        var realname = $("#realname").val();
        var reg=/^([\u4e00-\u9fa5]){2,7}$/; 
        if( !reg.test(realname)){
            sweetAlert({
                title: "错误",
                text: "请输入正确的姓名",
                type: "error",
                allowOutsideClick: true,
                confirmButtonColor: "rgb(238,55,21)",
                confirmButtonText :"确认",
                timer :"3000"
            })
            return false;
        }
        var phone = $("#phone").val();
        var info = $("#info").val();
        var intro = $("#intro").val();
        var age = $("#age").val();

        var province = $("#s_province").val();
        var city = $("#s_city").val();
        var county = $("#s_county").val();
        var address = city + county;
      
       
        if(province == "省份" || city == "地级市" || county == "市、县级市"){
            var personalData = JSON.stringify
            ({"user_name" : user_name,"user_id" : id,"user_nickname" : nickname,"user_realname" : realname,"user_phone"　: phone,"user_info" : info,"user_intro" : intro,"user_age" : age,"user_sex" : sex,"user_icon" : icon});
           
            var user_data = JSON.stringify
            ({"user_name" : user_name,"user_id" : id,"user_nickname" : nickname,"user_realname" : realname,"user_phone"　: phone,"user_info" : info,"user_intro" : intro,"user_age" : age,"user_sex" : sex,"user_icon" : icon,"user_mail" : user_mail,"user_password" : user_password,"user_type" : user_type,"user_city" : user_city,"user_address" : user_address});
            
        }else{
            var personalData = JSON.stringify
            ({"user_name" : user_name,"user_id" : id,"user_nickname" : nickname,"user_realname" : realname,"user_phone"　: phone,"user_city" : province,"user_address" : address,"user_intro" : intro,"user_intro" : intro,"user_age" : age,"user_sex" : sex,"user_icon" : icon,"user_mail" : user_mail,"user_password" : user_password,"user_type" : user_type});
            
            var user_data = JSON.stringify
            ({"user_name" : user_name,"user_id" : id,"user_nickname" : nickname,"user_realname" : realname,"user_phone"　: phone,"user_info" : info,"user_intro" : intro,"user_age" : age,"user_sex" : sex,"user_icon" : icon,"user_mail" : user_mail,"user_password" : user_password,"user_type" : user_type,"user_city" : province,"user_address" : address,});

        }
        console.log(personalData);

        setCookie("user_data",user_data);
        getCookie("user_data");

        $.ajax({
            url: MyPathConfig("updateUserInfo"),
            type:"post",
            contentType:"application/json;charset=utf-8", 
            data : personalData,
            success(res) {
                if(res.code == 200){
                    sweetAlert({
                        title: "成功",
                        text: res.message,
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                      }, function(){
                        window.location.reload();
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
