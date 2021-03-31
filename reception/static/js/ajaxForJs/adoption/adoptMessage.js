document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")

document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")

// document.write("<script src='js/skroll.min.js'></script>")


$(function (){

    $.ajax({
        url: MyPathConfig("queryAllPetsInfo"),
        dataType:"json",
        async:false,
        type:"get",
        success(res){
            if (res.code == 200) {
     
                // 将所对应修改的模块通过js去增加到父元素中
                var str = "";
               
                for(var i = 0; i < res.data.length; i++){
                    str += 
                    `
                    <div class="pet-show">
                        <div class="pet-photo" id="${i}">
                            <img src="${res.data[i].pi_image_1}" alt="">
                        </div>
                        <div class="pet-main">
                            <h5>${res.data[i].pi_name}</h5>
                            <p>${res.data[i].b_name}</p>
                        </div>
                    </div>
                    `
                  
                }
                
                
                
                $(".centre").append(str);

                // $("#ElementId").trigger("create")
            }
        }
    })

})

