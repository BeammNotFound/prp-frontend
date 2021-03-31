document.write("<script src='../../../common/js/configuration/ManConfig.js'></script>")


document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='../../../common/js/cookieUtil.js'></script>")


// 查看基地资讯

$(function(){
    var myJson = JSON.stringify({"base_id":getCookie("base_id")});
    // var myJson = JSON.stringify({"base_id":4 });

    $.ajax({
        url: MyPathConfig("queryBaseMessagesById"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                    var createTime = formatDate(res.data[i].bm_createtime);

                    str += 
                    `
                    <tr id="${res.data[i].bm_id}" class="${[i]}">
                        
                        <td>${res.data[i].bm_title}</td>
                        <td>${res.data[i].bm_author}</td>
                        <td>${res.data[i].bm_detail.substr(0,10)+'...'}</td>
                        <td>${createTime}</td>

                        <td>
                            <img src="${res.data[i].bm_image}">
                        </td>
                        
                        <td class="td-manage">
                        
                            <a title="编辑"  onclick="xadmin.open('编辑','baseMessEdit.html',600,400)" href="javascript:;" class="aEdit">
                                <i class="layui-icon">&#xe642;</i>
                            </a>
                            
                            <a title="删除" onclick="member_del(this,'要删除的id')" href="javascript:;">
                                <i class="layui-icon">&#xe640;</i>
                            </a>
                        </td>
                    </tr>
                    `
                   
                }
                $("#baseMessageTbody").append(str);

                $(".aEdit").click(function(){
                    var info = $(this).parents("tr").attr("class");
                    var message = JSON.stringify(res.data[info]);
                    setCookie("message",message);
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

