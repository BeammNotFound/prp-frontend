 document.write("<script src='static/js/config/cookieUtil.js'></script>")




document.write("<script src='static/js/formateDate.js'></script>")


// 志愿者待审批名单

document.write("<script src='static/js/config/cookieUtil.js'></script>")


$(function(){
    myJson = JSON.stringify({"status" : 2});

    $.ajax({
        url: MyPathConfig("queryAvFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var time = formatDate(res.data[i].av_application_time);
                    str += 
                    `
                    <tr id="${res.data[i].av_id}" class="${res.data[i].user_id}">
                        
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <button class="layui-btn voluForm" onclick="xadmin.open('申请志愿者表单','./voluForm.html',600,400)" style="background-color:#1e9fff;">查看</button>
                        </td>
                        <td class="td-status">
                            <button class="layui-btn layui-btn-normal layui-btn-mini" id="petPass" onclick="member_pass(this,'要通过的id')" lay-submit="" lay-filter="passBtn" type="button" style="background-color:#009688;">
                                通过
                            </button>
                            <button class="layui-btn layui-btn-danger layui-btn-mini" id="petUnPass" onclick="member_unPass(this,'要驳回的id')" lay-submit="" lay-filter="passBtn" type="button" style="background-color:#ff5722;">
                                驳回
                            </button>
                        </td>
                        <td>${time}</td>
                    </tr>
                    `
                  
                }
                
                $("#petUnAdoMemTbody").append(str);

                $(".voluForm").click(function(){
                    var av_id = $(this).parents("tr").attr("id");
                    var userId = $(this).parents("tr").attr("class");
                    
                    setCookie("av_id",av_id);

                    setCookie("userId",userId);
                })
            }
        },
        error(error) {
           window.location.href = "static/man/manError500.html";
        }
    })

    
})
