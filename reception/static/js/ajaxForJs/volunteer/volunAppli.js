// 申请志愿者表单

document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


    function volunClick(){
        var user_id = JSON.parse(getCookie("user_data")).user_id;
        var base_id = getCookie("base_id");

        var realname = $("#realname").val();
        var phone = $("#phone").val();
        var adoptAge = $("#adoptAge").val();
        var profession = $("#profession").val();

        var date ="";
        var group ="";
        var car ="";

        $("input:checkbox[name='date']:checked").each(function(i){
            if(i == 0){
                date += $(this).val();
            }else{
                date += ',' +  $(this).val()
            }
                
        });

        $("input:checkbox[name='group']:checked").each(function(i){
            if(i == 0){
                group += $(this).val();
            }else{
                group += ',' +  $(this).val();

            }
        });

       


        var family = $('input:radio[name="family"]:checked').val();
        var disease = $('input:radio[name="disease"]:checked').val();
        var train = $('input:radio[name="train"]:checked').val();
        var activity = $('input:radio[name="activity"]:checked').val();
        var car = $('input:radio[name="car"]:checked').val();
       
        var data = JSON.stringify({"base_id":base_id, "user_id":user_id, "vf_age":adoptAge, "vf_family_agree":family, "vf_had_car":car, 
        "vf_had_joined":activity, "vf_health":disease, "vf_join_time":date, "vf_join_work":group, "vf_phone":phone, "vf_profession":profession,
        "vf_real_name":realname, "vf_receive_train":train})
        console.log(data);

        var reg = /^[\u4E00-\u9FA5]{1,6}$/; 
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
        
        $.ajax({
            url: MyPathConfig("userApplication"),
            type:"post",
            contentType:"application/json;charset=utf-8",  //注意，这里是json格式
            data : data,
            success(res){
                if(res.code == 200){
                    sweetAlert({
                        title: "成功",
                        text: res.message,
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                      }, function(){
                        window.location.href = "page1.html";
                      });
                }else{
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
            error: function(){
                window.location.href = "../../../common/html/rec/recError500.html"
            }
        })
      
}
    