
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")


$(function(){
    var data =JSON.parse(getCookie("user_data")) ;
    console.log(data);
    var img = 
    `
    <img src="${data.user_icon}" alt="" id="preview">
    `
    $(".photo-amend").before(img);


})