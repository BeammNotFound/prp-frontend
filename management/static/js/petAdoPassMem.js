document.write("<script src='static/js/formateDate.js'></script>")

// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")



// 通过领养名单

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
                    var passTime = formatDate(res.data[i].ap_pass_time);

                    str += 
                    `
                    <tr id="${res.data[i].ap_id}">
                        
                        <td>${res.data[i].user_name}</td>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>${appTime}</td>
                        <td>${passTime}</td>
                    </tr>
                    `
                  
                }
                
                $("#petPassMemTbody").append(str);
            }
        },
        error(error) {
            window.location.href = "../../../common/html/man/manError500.html"

        }
    })

    
})
