function  check(){
    let res= getCookie("user_data");
    if(res){
        res = JSON.parse(res);
        $("#boxed-btn4").css("display","none");
        //$("#personal-a").css("padding-right","0");
        $("#personal-ul").css("display","block");
        $("#personal span").html("");
        $("#personal span").append(res.user_name);
        $("#personal-img").attr("src",res.user_icon);
        return;
    }
}

