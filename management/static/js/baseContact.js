document.write("<script src='static/js/config/cookieUtil.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
document.write("<script src='static/js/config/cookieUtil.js'></script>")


// 查看基地留言

$(function(){
    var myJson = JSON.stringify({"base_id":getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryContactByBaseId"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if(res.code == 200){
                var str = "";
                

                for(var i = 0; i < res.data.length; i++){
                    var createTime = formatDate(res.data[i].c_createtime);

                    str += 
                    `
                    <tr>
                        
                        <td>
                        <img src="${res.data[i].user_icon}">
                        
                        </td>
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_mail}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_address}</td>
                        <td>${res.data[i].c_words.substring(0,10) + '...'}</td>
                        <td>${createTime}</td>
                        
                    `
                   
                }
                $("#baseContactTbody").append(str);
                
            }
        },
        error(error) {
           window.location.href = "static/man/manError500.html";

        }
    })

    
})

