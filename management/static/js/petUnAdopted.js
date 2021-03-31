document.write("<script src='../../../common/js/configuration/ManConfig.js'></script>")


document.write("<script src='static/js//formateDate.js'></script>")

// 未被领养宠物

$(function(){
    $.ajax({
        url: MyPathConfig("queryUnAdoptedPetsInfo"),
        type:"get",
        // data : ,
        success(res) {
            if(res.code == 200){  
                console.log(res.data);
                var str = "";
                
                for(var i = 0; i < res.data.length; i++){
                var createTime = formatDate(res.data[i].pi_createtime);

                    str += 
                    `
                    <tr>
                        <td>${res.data[i].pi_name}</td>
                        <td>${res.data[i].pi_breed}</td>
                        <td>${res.data[i].pi_age}</td>
                        <td>${res.data[i].pi_DH}</td>
                        <td>${res.data[i].pi_intro.substr(0,10) + '...'}</td>
                        
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
