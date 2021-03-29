document.write("<script src='static/configuration/myConfig.js'></script>")
document.write("<script src='static/js/formateDate.js'></script>")
// 宠物收藏名单

$(function(){
    $.ajax({
        url: MyPathConfig("queryStarredPets"),
        type:"get",
        // data : ,
        success(res) {

            if(res.code == 200){  
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                    var createTime = formatDate(res.data[i].ps_create_time);

                    str += 
                    `
                    <tr>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].pi_breed}</td>
                        <td>${res.data[i].pi_age}</td>
                        <td>${res.data[i].user_realname}</td>
                        <td>${res.data[i].user_sex}</td>
                        <td>${res.data[i].user_age}</td>
                        <td>${res.data[i].user_city}</td>
                        <td>${createTime}</td>
                    </tr>
                    `
                }
                $("#petAllTbody").append(str);
            }else if(res.code == 404){
                error404();
            }
        },
        error(error) {
            error500();
        }
    })

})
