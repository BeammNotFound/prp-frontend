document.write("<script src='static/configuration/myConfig.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/js/ajaxForJs/common/cookieUtil.js'></script>")

// document.write("<script src='static/js/formateDate.js'></script>")

// 宠物列表中的修改
    $(function(){
        var myJson = JSON.stringify({"user_id": getCookie("user_id")}) 

        $.ajax({
            url: MyPathConfig("queryAdoptionFormByUserId"),
            type: "post",
            contentType:"application/json;charset=utf-8",  //注意，这里是json格式
            data : myJson,
            success(res){
                if(res.code == 200){
                    $('input:text[name="address"]').val(res.data[0].af_address);
                    $('input:text[name="age"]').val(res.data[0].af_age);
                    $('input:text[name="appraise"]').val(res.data[0].af_appraise);
                    $('input:text[name="info1"]').val(res.data[0].af_info1);
                    $('input:text[name="info2"]').val(res.data[0].af_info2);
                    $('input:text[name="info3"]').val(res.data[0].af_info3);
                    $('input:text[name="info4"]').val(res.data[0].af_info4);
                    $('input:text[name="info5"]').val(res.data[0].af_info5);
                    $('input:text[name="info6"]').val(res.data[0].af_info6);
                }else if(res.code == 404){
                    error404();
                }
            },
            error(error) {
                error500();
    
            }
            
        })
    })
    



