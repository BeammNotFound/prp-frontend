// 领养申请表单

    function appAdoptClick(){
        var user_id = JSON.parse(getCookie("user_data")).user_id;

        var pet_id = getCookie("pet_id");
        var base_id = getCookie("base_id");

        var address =  $("#address").val();
        var adoptAge = $("#adoptAge").val();
        var appraise = $("#appraise").val();
    
        var know = $('input:radio[name="know"]:checked').val();
        var any = $('input:radio[name="any"]:checked').val();
        var experience = $('input:radio[name="experience"]:checked').val();
        var family = $('input:radio[name="family"]:checked').val();
        var follow = $('input:radio[name="follow"]:checked').val();
        var time = $('input:radio[name="time"]:checked').val();
        var data = JSON.stringify({"af_address":address,"af_age":adoptAge,"af_appraise":appraise,"af_info1":know,"af_info2":any,"af_info3":experience,
        "af_info4":family,"af_info5":follow,"af_info6":time,"user_id":user_id,"pet_id":pet_id,"base_id":base_id});
        
        console.log(data);


        $.ajax({
            url: MyPathConfig("adoptPet"),
            type:"post",
            contentType:"application/json;charset=utf-8",  //注意，这里是json格式
            data : data,
            success(res){
                var message = res.message;
                console.log(message);
                if(res.code == 200){
                    sweetAlert({
                        title: "成功",
                        text: "提交表单成功",
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
    