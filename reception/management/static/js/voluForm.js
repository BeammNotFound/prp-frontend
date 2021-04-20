 document.write("<script src='static/js/config/cookieUtil.js'></script>")




document.write("<script src='static/js/formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")

//document.write("<script src='static/js/formateDate.js'></script>")



// 宠物列表中的修改
    $(function(){
        var myJson = JSON.stringify({"user_id": getCookie("userId")}) 

        $.ajax({
            url: MyPathConfig("queryVolunteerFormByUserId"),
            type: "post",
            contentType:"application/json;charset=utf-8",  //注意，这里是json格式
            data : myJson,
            success(res){
                if(res.code == 200){
                    $('input:text[name="realName"]').val(res.data[0].vf_real_name);
                    $('input:text[name="age"]').val(res.data[0].vf_age);
                    $('input:text[name="phone"]').val(res.data[0].vf_phone);
                    $('input:text[name="career"]').val(res.data[0].vf_profession);
                    $('input:text[name="date"]').val(res.data[0].vf_join_time);
                    $('input:text[name="family"]').val(res.data[0].vf_family_agree);
                    $('input:text[name="disease"]').val(res.data[0].vf_health);
                    $('input:text[name="group"]').val(res.data[0].vf_join_work);
                    $('input:text[name="car"]').val(res.data[0].vf_had_car);
                    $('input:text[name="activity"]').val(res.data[0].vf_receive_train);

                }
            },
            error(error) {
                window.location.href = "../../../common/html/man/manError500.html"
            }
        })
    })
    



