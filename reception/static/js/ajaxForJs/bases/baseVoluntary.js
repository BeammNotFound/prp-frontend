document.write("<script src='static/configuration/ManConfig.js'></script>")

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