 document.write("<script src='static/js/config/cookieUtil.js'></script>")




document.write("<script src='static/js/formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")


// 申请志愿者未通过名单



$(function(){
    myJson = JSON.stringify({"status" : 3});

    $.ajax({
        url: MyPathConfig("queryAvFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var appTime = formatDate(res.data[i].av_application_time);

                    str += 
                    `
                    <tr class="${res.data[i].user_id}">
                        
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <button class="layui-btn voluForm" onclick="xadmin.open('申请志愿者表单','./voluForm.html',600,400)" style="background-color:#1e9fff;">查看</button>
                        </td>
                        <td>${appTime}</td>
                    </tr>
                    `
                  
                }
                
                $("#petPassMemTbody").append(str);

                $(".voluForm").click(function(){
                    var userId = $(this).parents("tr").attr("class");
                    setCookie("userId",userId);
                })
            }
        },
        error(error) {
            window.location.href = "../man/manError500.html"
        }
    })

    
})
