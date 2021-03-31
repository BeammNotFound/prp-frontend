document.write("<script src='../../../common/js/configuration/ManConfig.js'></script>")


document.write("<script src='static/js//formateDate.js'></script>")


// 所有宠物名单

$(function(){
    $.ajax({
        url: MyPathConfig("queryAllPetsInfo"),
        type:"get",
        // data : ,
        success(res) {
            if(res.code == 200){  
                var str = "";
               
                for(var i = 0; i < res.data.length; i++){

                    if(res.data[i].ap_pass_time == null){
                        var pass_time = "暂无通过时间";
                    }else{
                        pass_time = formatDate(res.data[i].ap_pass_time);
                    }
                    
                    var createTime = formatDate(res.data[i].pi_createtime);
                    
                    
                    str += 
                    `
                    <tr id="${res.data[i].pi_id}" class="${i}">
                        
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].pi_breed}</td>
                        <td>${res.data[i].pi_age}</td>
                        <td>${res.data[i].pi_DH}</td>
                        <td>${res.data[i].pi_intro.substr(0,10) + '...'}</td>
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
                        <td>${pass_time}</td>
                        
                        <td class="td-manage">
                        
                            <a title="编辑"  onclick="xadmin.open('编辑','petEdit.html',600,400)" href="javascript:;" class="aEdit">
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
                    var info = $(this).parents("tr").attr("class");
                    var arr = JSON.stringify(res.data[info])
                
                    setCookie("arr",arr);
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
