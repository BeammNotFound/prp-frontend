$(function(){
    $("#exit").click(function(){
        clearCookieSingle("user_data");
        window.location.reload();
    })
})