document.write("<script src='static/configuration/myConfig.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/js/cookieUtil.js'></script>")


// 未通过领养名单

$(function(){
    myJson = JSON.stringify({"status" : 1});

    $.ajax({
        url: MyPathConfig("queryApFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var appTime = formatDate(res.data[i].ap_application_time);

                    str += 
                    `
                    <tr id="${res.data[i].user_id}">
                        
                        <td>${res.data[i].user_name}</td>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <button class="layui-btn checkForm" onclick="xadmin.open('添加宠物','./petAdoptForm.html',600,400)" style="background-color:#1e9fff;" >查看</button>
                        </td>
                        <td>${appTime}</td>
                        
                    </tr>
                    `
                  
                }
                
                $("#petAdoUnPassMemTbody").append(str);
                $(".checkForm").click(function(){
                    var user_id = $(this).parents("tr").attr("id");
                    
                    setCookie("user_id",user_id);
                })
            }else if(res.code == 404){
                error404();
            }
        },
        error(error) {
            error500();

        }
    })

    
})
