document.write("<script src='static/configuration/myConfig.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/js/cookieUtil.js'></script>")


// 待审批领养宠物名单

$(function(){
    myJson = JSON.stringify({"status" : 2});

    $.ajax({
        url: MyPathConfig("queryApFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var time = formatDate(res.data[i].ap_application_time);
                    str += 
                    `
                    <tr id="${res.data[i].ap_id}">
                        
                        <td>${res.data[i].user_name}</td>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <a href="javascript:;" class="layui-btn layui-btn-normal layui-btn-mini checkForm" style="background-color:#1e9fff;"" onclick="xadmin.open('添加宠物','./petAdoptForm.html',600,400)" >查看</a>
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
