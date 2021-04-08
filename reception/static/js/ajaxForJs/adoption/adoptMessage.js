// 领养页面中宠物展示 

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
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 pet-show" style="margin-top:20px">
                        <div class="thumbnail adopt-content">
                            <div class="content-img" id="${i}">
                                <img src="${res.data[i].pi_image_1}" alt="">
                            </div>
                            <div class="caption content-text">
                                <h5>${res.data[i].pi_name}</h5>
                                <p>${res.data[i].b_name}</p>
                            </div>
                        </div>
                    </div>
                    `
                  
                }
                $("#adoptShow").append(str);
            }
        },
        error: function(){
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })
