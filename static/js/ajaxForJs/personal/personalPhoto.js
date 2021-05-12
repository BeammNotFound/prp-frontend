
document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")


$(function(){
    var data =JSON.parse(getCookie("user_data")) ;
    var img = 
    `
    <img src="${data.user_icon}" alt="" id="preview">
    `
    $(".photo-amend").before(img);


})