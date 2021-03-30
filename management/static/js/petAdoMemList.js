document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/configuration/ManConfig.js'></script>")
document.write("<script src='static/js/ajaxForJs/common/cookieUtil.js'></script>")


// 所有领养名单

$(function(){
    myJson = JSON.stringify({"status" : 0});

    $.ajax({
        url: MyPathConfig("queryApFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    if(res.data[i].ap_pass_time == null){
                        var passTime = "暂无通过时间";
                    }else{
                        passTime = formatDate(res.data[i].ap_pass_time);
                    }

                    var createTime = formatDate(res.data[i].ap_application_time);
                    str += 
                    `
                    <tr id="${res.data[i].user_id}">
                        
                        <td>${res.data[i].user_name}</td>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <button class="layui-btn checkForm" onclick="xadmin.open('申请领养宠物表单','./petAdoptForm.html',600,400)" style="background-color:#1e9fff;">查看</button>
                        </td>
                        
                    `
                    
                    if (res.data[i].ap_status == "审批驳回"){
                        str += 
                        `
                            <td class="td-status" >
                                <span class="layui-btn" style="background-color:#ff5722;">${res.data[i].ap_status}</span>
                            </td>
                        `
                    }else if(res.data[i].ap_status == "审批通过"){
                        str += 
                        `
                            <td class="td-status">
                                <span class="layui-btn" style="background-color:#009688;">${res.data[i].ap_status}</span>
                            </td>
                            
                        `
                    }else{
                        str += 
                        `
                            <td class="td-status">
                                <span class="layui-btn" style="background-color:#1e9fff;">${res.data[i].ap_status}</span>
                            </td>
                            
                        `
                    }
                    str += 
                    `
                        <td>${createTime}</td>
                        <td>${passTime}</td>
                    </tr>
                    `
                    
                }
                
                $("#petMemTbody").append(str);
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
