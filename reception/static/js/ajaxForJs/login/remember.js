// 登录中的记住登陆状态按钮
$(document).ready(function(){
       if (getCookie("user_name") != null) {
         //往input#username填入存到cookie中username的值
         $("#loginUsername").val($.cookie("user_name"));
         //往input#password填入存到cookie中username的值
         $("#loginPassword").val($.cookie("password"));
         //让“记住我”的复选框保持被选中状态
         $('input:checkbox').attr("checked", true);
       }
});
    
    