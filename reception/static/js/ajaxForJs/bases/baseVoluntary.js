
// 基地详情页面中判断是否登陆来申请志愿者
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
        if(getCookie("user_data")){
            var user_data = JSON.parse(getCookie("user_data"));

            $("#base-volu-btn").css("display","inline-block");
            $("#base-volu-btn").click(function(){

            var base_id = getCookie("base_id");
            var user_id = user_data.user_id;
            var myJson = JSON.stringify({"base_id" : base_id,"user_id" : user_id});
            console.log(myJson);
            
        })
    }
})