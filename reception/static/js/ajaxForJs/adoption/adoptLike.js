
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")
document.write("<script src='../../../../../common/js/cookieUtil.js'></script>")
// 宠物喜欢
$(function(){
    

    var i = 0;

    $("#adoptLike").click(function(){
        // 判断用户是否登录
        if(getCookie("user_data") == "" || getCookie("user_data") == undefined){
            return false;
        }else{
        i++;
        var user_id = JSON.parse(getCookie("user_data")).user_id;
        var myJson = JSON.stringify({"pi_id" : getCookie("pet_id"),"user_id" : user_id});

        if(i%2!=0){
            
            $.ajax({
                url: MyPathConfig("addStarPet"),
                type:"post",
                contentType:"application/json;charset=utf-8",  //注意，这里是json格式
                data : myJson,
                success(res){
                    if(res.code == 200){
                        
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
        }else{
            $.ajax({
                url: MyPathConfig("delStarPet"),
                type:"post",
                contentType:"application/json;charset=utf-8",  //注意，这里是json格式
                data : myJson,
                success(res){
                    if(res.code == 200){
                        
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
        }
    }

    })

})