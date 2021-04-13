// 基地详情中宠物领养的详情
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")
document.write("<script src='../../../../../common/js/cookieUtil.js'></script>")
document.write("<script src='static/js/ajaxForJs/common/formateDate.js'></script>")
document.write("<script src='static/js/myjs/slideshow.js'></script>")

function aboveBtn(){
    //点击一个宠物，显示宠物详细页面

    $('.base-adopt img').click(function(){
        $('.adopt-details, .mask-box').show();
        $('body,html').css('overflow-y', 'hidden');

        // 辨别是哪一个点开了详情
        var piId = $(this).parent("div").attr('id');
        setCookie("piId",piId);
        
        adoptClick()
    });

}
function adoptClick(){

    $("#adoptDetail").remove();

    var myJson = JSON.stringify({"base_id" : getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryPetsInfoByBaseId"),
        type: "post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                var piId = getCookie("piId");
                var createTime = formatDate(JSON.parse(res.data[piId].pi_createtime));

                setCookie("pet_id",res.data[piId].pi_id);
                var str = 
                `
                <div id="adoptDetail">
                    <div class="adopt-base">
                        <div class="adopt-base-img">
                            <img src="${res.data[piId].b_icon}" alt="">
                        </div>
                        <div class="adopt-base-name">
                            <h3>${res.data[piId].b_name}</h3>
                            <p>发布于${createTime}</p>
                        </div>
                    </div>
                    <div class="pet-introduce">
                        <h3>${res.data[piId].pi_name}</h3>
                        <p style="padding-bottom: 8px; margin-bottom: 0px;">${res.data[piId].pi_breed}</p>
                        <p style="padding-bottom: 8px; margin-bottom: 5px;">${res.data[piId].pi_age}</p>
                        <div id="wrap" >
                            <ul class="list">
                                <li class="item active" style="width: 783px;height: 560px;"><img src="${res.data[piId].pi_image_1}" alt="" style="object-fit: cover;object-position: center;"></li>
                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[piId].pi_image_2}" alt="" style="object-fit: cover;object-position: center;"></li>
                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[piId].pi_image_3}" alt="" style="object-fit: cover;object-position: center;"></li>
                                <li class="item" style="width: 783px;height: 560px;"><img src="${res.data[piId].pi_image_4}" alt="" style="object-fit: cover;object-position: center;"></li>
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
                        <p style="margin-top: 20px;">疾病史<span>：</span>${res.data[piId].pi_DH}</p>
                        <p><span>简&nbsp;&nbsp;&nbsp;介：</span>${res.data[piId].pi_intro}</p>
                    </div>
                </div>

            `
            $(".pet-like").prepend(str);
            carousel();
            }
        },
        error: function () {
            window.location.href = "../../../common/html/rec/recError500.html";
        }
    })

}