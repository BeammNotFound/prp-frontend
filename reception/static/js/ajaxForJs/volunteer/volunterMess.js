document.write("<script src='static/configuration/ManConfig.js'></script>")
// document.write("<script src='js/skroll.min.js'></script>")


$(function (){

    $.ajax({
        url: MyPathConfig("queryAllVolunteer"),
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
                        <img src="${res.data[i].b_icon}" alt="">
                    </div>
                    <div class="pet-main">
                        <h5>${res.data[i].b_name}</h5>
                        <p>需志愿者人数：${res.data[i].vi_population}名</p>
                        <p>报&nbsp;&nbsp;名&nbsp;&nbsp;状&nbsp;&nbsp;态&nbsp;&nbsp;：${res.data[i].vi_status}</p>
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

