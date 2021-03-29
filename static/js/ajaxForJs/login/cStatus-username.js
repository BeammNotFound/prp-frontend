var app = new Vue({
    el: '#login-in',
    methods:{
        changeStatus() {
            var username = getCookie("user_name");
            console.log("wo被点了");
            if(username !=  $("#loginUsername").val()){
                var password = $("#loginPassword").val("");
                var re = $("#remember-password").prop("checked",false);
            }else{
                password = $("#loginPassword").val(getCookie("password"));
                re = $("#remember-password").prop("checked",true);
            }
        }
    }
    
})