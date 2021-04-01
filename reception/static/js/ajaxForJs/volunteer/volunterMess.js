
// 志愿者申请页面中活动展示

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
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 pet-show">
                        <div class="thumbnail adopt-content">
                            <div class="content-img" id="${i}">
                                <img src="${res.data[i].b_icon}" alt="">
                            </div>
                            <div class="caption content-text">
                                <h5>${res.data[i].b_name}</h5>
                                <p>需志愿者人数：${res.data[i].vi_population}名</p>
                                <p>报  名  状  态  ：${res.data[i].vi_status}</p>
                            </div>
                        </div>
                    </div>
                    `
                  
                }
                $("#volunteerShow").append(str);
            }
        },
        error: function(){
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })

