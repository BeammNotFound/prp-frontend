document.write("<script src='static/js/config/cookieUtil.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/js/config/cookieUtil.js'></script>")


// 所有志愿者活动列表

$(function(){
    myJson = JSON.stringify({"base_id":1});
    $.ajax({
        url: MyPathConfig("queryMVolunteerInfoByBaseId"),
        type:"post",
        contentType:"application/json;charset=utf-8",
        data : myJson,
        success(res) {
            if(res.code == 200){  
                var str = "";
               
                for(var i = 0; i < res.data.length; i++){
                    var startTime = formatDate(res.data[i].vi_start_time);
                    var endTime =  formatDate(res.data[i].vi_end_time);
                    
                    str += 
                    `
                    <tr id=${res.data[i].vi_id}>
                        <td>${res.data[i].b_address}</td>
                        <td>${res.data[i].b_name}</td>
                        <td>${res.data[i].b_phone}</td>
                        <td>${res.data[i].b_mail}</td>
                        <td>${res.data[i].vi_requirement.substr(0,4) + '...'}</td>
                        <td>${res.data[i].vi_intro.substr(0,4) + '...'}</td>
                        <td>${res.data[i].vi_population}</td>
                        <td>${res.data[i].vi_joinPopulation}</td>
                        <td class="td-status">
                            <span class="layui-btn" style="background-color:#1e9fff;">${res.data[i].vi_status}</span>
                        </td>
                        <td>${startTime}</td>
                        <td>${endTime}</td>
                        
                        <td class="td-manage">
                        
                            <a title="编辑"  onclick="xadmin.open('编辑','voluEdit.html',600,400)" href="javascript:;" class="aEdit">
                            <i class="layui-icon">&#xe642;</i>
                            </a>
                            
                            <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                            <i class="layui-icon">&#xe640;</i>
                            </a>
                        </td>
                    </tr>
                    `
                       
                        
                    
                  
                }
                
                $("#petAllTbody").append(str);
                $(".aEdit").click(function(){
                   
                    var info = JSON.stringify(res.data)
                    setCookie("info",info);
                })
            }
        },
        error(error) {
           window.location.href = "static/man/manError500.html";
        }
    })

})
