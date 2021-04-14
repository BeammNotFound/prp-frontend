
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")
// document.write("<script src='../../../../../common/js/cookieUtil.js'></script>")
// 个人主页中取消宠物喜欢

function cancel(){
        sweetAlert({
            title: "Are you sure?",
            text: "确认取消喜欢吗？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
          }, function(){
            swal("Deleted!",
            "Your imaginary file has been deleted.",
            "success");
            // 判断用户是否登录
            var user_id = JSON.parse(getCookie("user_data")).user_id;
            var myJson = JSON.stringify({"pi_id" : getCookie("pet_id"),"user_id" : user_id});
            
            $.ajax({
                url: MyPathConfig("delStarPet"),
                type:"post",
                contentType:"application/json;charset=utf-8",  //注意，这里是json格式
                data : myJson,
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
                            window.location.reload();
                        });
                    }else if (res.code == 412) {
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
                error() {
                    window.location.href = "../../../common/html/rec/recError500.html"
                }
            })
          });
        
}
    