 document.write("<script src='static/js/config/myConfig.js'></script>")




document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")



// 检查登陆
$(function(){
    if(getCookie("base_id") == undefined){
        location.href = 'login.html';
    }else{
        var info = JSON.parse(getCookie("base_info"));
        var str ="";
        str +=
        `
        <a href="javascript:;">${info.b_name}</a>
        
        `
        $(".dlExit").before(str);
    }
})

