// 个人主页中的领养列表
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")



$(function(){
    var data = JSON.parse(getCookie("user_data"));
    var user_id = data.user_id;
    var myJson = JSON.stringify({"user_id": user_id})
    $.ajax({
        url: MyPathConfig("queryAdoptPetById"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : myJson,
        success(res) {
            if(res.code == 200){
                console.log(res.data);
                for(var i = 0; i < res.data.length; i++){
                    var str = 
                        `
                        <div class="adoption-Pet">
                            <div class="pet-photo">
                                <a href="javascript:;" class="adoption-a" id="${[i]}">
                                    <img src="${res.data[i].pi_image_1}" alt="">
                                </a>
                            </div>
                            <div id="pet-content">
                                <p>姓名：${res.data[i].pi_name}</p>
                                <p>品种：${res.data[i].pi_breed}</p>
                                <p>年龄：${res.data[i].pi_age}</p>
                                <p>疾病史：${res.data[i].pi_DH}</p>
                                
                            </div>
                        </div>
                        `
                        $("#personal-adopt").append(str);
                        console.log(111);

                        var data = res.data;
                        $(".adoption-a").click(function(e){
                            if(!e.isPropagationStopped()){
                                var i = $(this).attr("id");
                                console.log(data);
                                var createTime = res.data.pi_createtime;
                                var obj =
                                `
                                <div id="adoptDetail">
                                    <div class="adopt-base">
                                        <div class="adopt-base-img">
                                            <img src="static/img/gCd0pDzhYe.jpg" alt="">
                                        </div>
                                        <div class="adopt-base-name">
                                            <h3>Beam</h3>
                                            <p>发布于${createTime}</p>
                                        </div>
                                    </div>
                                    <div class="pet-introduce">
                                        <h3>${res.data[i].pi_name}</h3>
                                        <p style="padding-bottom: 8px; margin-bottom: 0px;">${res.data[i].pi_breed}</p>
                                        <p style="padding-bottom: 8px; margin-bottom: 5px;">${res.data[i].pi_age}</p>
                                        <div id="wrap" >
                                            <ul class="list">
                                                <li class="item active" style="width: 783px;height: 560px;"><img src="${res.data[i].pi_image_1}" alt="" style="object-fit: cover;object-position: center;"></li>
                                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[i].pi_image_2}" alt="" style="object-fit: cover;object-position: center;"></li>
                                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[i].pi_image_3}" alt="" style="object-fit: cover;object-position: center;"></li>
                                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[i].pi_image_4}" alt="" style="object-fit: cover;object-position: center;"></li>
                                            </ul>
                                            <ul class="pointList">
                                                <li class="point active" data-index = '0'></li>
                                                <li class="point" data-index = '1'></li>
                                                <li class="point" data-index = '2'></li>
                                                <li class="point" data-index = '3'></li>
                                            </ul>
                                            <div class="btn fa fa-angle-left" id="goPre"></div>
                                            <div class="btn fa fa-angle-right" id="goNext"></div>
                                        </div>
                                        <p style="margin-top: 20px;">疾病史<span>：</span>${res.data[i].pi_DH}</p>
                                        <p><span>简&nbsp;&nbsp;&nbsp;介：</span>${res.data[i].pi_intro}</p>
                                    </div>
                                </div>

                                `
                                setCookie("base_id",data[i].base_id);
                                setCookie("pet_id",data[i].pi_id);

                                $(".pet-box").append(obj);

                                $('.pet-box, .mask-box').show();
                                $('.pet-content').fadeIn(500);
                                $('body,html').css('overflow-y', 'hidden');
                                }
                            e.stopPropagation();
                        })
                               
                        
                    }
            }else if(res.code == 412){
                $("#personal-adopt h5").html(res.message);
                
            }
               
        },
        error(error) {
            console.log(error);
        }
    })
})

