document.write("<script src='../../../common/js/configuration/ManConfig.js'></script>")


document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='../../../common/js/cookieUtil.js'></script>")


// 退出登录

$("#exit").click(function(){
    deleteCookie("base_id");
    deleteCookie("base_info");
    location.href = 'login.html';
    
})