 document.write("<script src='static/js/config/myConfig.js'></script>")




document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")


// 所有志愿者申请名单

$(function(){
    myJson = JSON.stringify({"status" : 0});

    $.ajax({
        url: MyPathConfig("queryAvFormByStatus"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){

                    if(res.data[i].av_pass_time == null){
                        var pass_time = "暂无通过时间";
                    }else{
                        pass_time = formatDate(res.data[i].av_pass_time);
                    }
                    
                    var createTime = formatDate(res.data[i].av_application_time);

                    str += 
                    `
                    <tr id="${res.data[i].user_id}">
                        
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>
                        <button class="layui-btn checkForm" onclick="xadmin.open('申请志愿者表单','./voluForm.html',600,400)" style="background-color:#1e9fff;">查看</button>
                        </td>
                    `
                  
                    if (res.data[i].av_status == "审批驳回"){
                        str += 
                        `
                            <td class="td-status" >
                                <span class="layui-btn" style="background-color:#ff5722;">${res.data[i].av_status}</span>
                            </td>
                        `
                    }else if(res.data[i].av_status == "审批通过"){
                        str += 
                        `
                            <td class="td-status">
                                <span class="layui-btn" style="background-color:#009688;">${res.data[i].av_status}</span>
                            </td>
                            
                        `
                    }else{
                        str += 
                        `
                            <td class="td-status">
                                <span class="layui-btn" style="background-color:#1e9fff;">${res.data[i].av_status}</span>
                            </td>
                            
                        `
                    }

                    str += 
                    `
                        
                        <td>${createTime}</td>
                        <td>${pass_time}</td>
                        
                    </tr>
                    `

                    
                }
                
                $("#voluAllTbody").append(str);
                $(".checkForm").click(function(){
                    var userId = $(this).parents("tr").attr("id");
                    console.log(userId);
                    setCookie("userId" , userId);
                })
            }
        },
        error(error) {
            window.location.href = "../../../common/html/man/manError500.html"
        }
    })

    
})

