document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")



document.write("<script src='static/js//formateDate.js'></script>")

// 已被领养宠物名单

$(function(){
    $.ajax({
        url: MyPathConfig("queryAdoptedPetsInfo"),
        type:"get",
        // data : ,
        success(res) {

            if(res.code == 200){  
                var str = "";
                // var passTime = formatDate(res.data[i].ap_pass_time);
                
                for(var i = 0; i < res.data.length; i++){
                var passTime = formatDate(res.data[i].ap_pass_time);

                    str += 
                    `
                    <tr>
                        
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].pi_breed}</td>
                        <td>${res.data[i].pi_age}</td>
                        <td>${res.data[i].pi_DH}</td>
                        <td>${res.data[i].user_name}</td>
                        <td>${res.data[i].user_phone}</td>
                        <td>${passTime}</td>
                        
                    </tr>
                    `
                  
                }
                
                $("#petAllTbody").append(str);
            }
        },
        error(error) {
            window.location.href = "../../../common/html/man/manError500.html"

        }
    })

})
