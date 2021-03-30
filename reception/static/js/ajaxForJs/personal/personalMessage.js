$(function (){
   var data = JSON.parse(getCookie("user_data"));

   $("#nickname").val(data.user_nickname);
   $("input[type=radio]").attr("checked",'data.user_sex');
   $("#realname").val(data.user_realname);
   $("#phone").val(data.user_phone);
   

   $("#s_province").val("省份");
   $("#s_city").val("地级市");
   $("#s_county").val("市、县级市");

   $("#info").val(data.user_info);
   $("#intro").val(data.user_intro);

   $("#age").val(data.user_age);

})

