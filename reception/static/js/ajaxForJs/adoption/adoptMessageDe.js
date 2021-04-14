// 领养页面中宠物详情信息
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")
// document.write("<script src='../../../../../common/js/cookieUtil.js'></script>")
document.write("<script src='static/js/ajaxForJs/common/formateDate.js'></script>")
document.write("<script src='static/js/myjs/slideshow.js'></script>")

$(function(){
    adoptDeClick();
    
    function adoptDeClick(){
        $('.content-img, .content-text>h5').click(function(){
            $(".adopt-details").show();
            $('body,html').css('overflow', 'hidden');
            var i = $(this).attr("id");
            click(i);
        })
    }


    function click(i){
        $("#adoptDe").remove();

        $.ajax({
            url: MyPathConfig("queryAllPetsInfo"),
            dataType:"json",
            async:false,
            type:"get",
            success(res){
                if (res.code == 200) {
                    var data = res.data;
                    var createTime = formatDate(JSON.parse(data[i].pi_createtime));
                    var obj = ""
                    obj +=
                    `
                    <div id="adoptDe">
                        <div class="cat-decorate">
                            <img src="static/img/new/decorate2.png" alt="">
                        </div>
                        <div class="adopt-base">
                            <div class="adopt-base-img">
                                <img src="${data[i].b_icon}" alt="">
                            </div>
                            <div class="adopt-base-name">
                                <h3>${data[i].b_name}</h3>
                                <p>发布于${createTime}</p>
                            </div>
                        </div>
                        <div class="pet-introduce">
                            <h3>${data[i].pi_name}</h3>
                            <p style="padding-bottom: 8px; margin-bottom: 0px;">${data[i].pi_breed}</p>
                            <p style="padding-bottom: 8px; margin-bottom: 5px;">${data[i].pi_age}</p>
                            <div id="wrap" >
                                <ul class="list" >
                                    <li class="item active"><img src="${data[i].pi_image_1}" alt=""></li>
                                    <li class="item"><img src="${data[i].pi_image_2}" alt=""></li>
                                    <li class="item"><img src="${data[i].pi_image_3}" alt=""></li>
                                    <li class="item"><img src="${data[i].pi_image_4}" alt=""></li>
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
                            <p style="margin-top: 20px;">疾病史<span>：</span>${data[i].pi_DH}</p>
                            <p><span>简&nbsp;&nbsp;&nbsp;介：</span>${data[i].pi_intro}</p>
                        </div>
                    </div>
                    `
                    setCookie("base_id",data[i].base_id);
                    setCookie("pet_id",data[i].pi_id);

                    $(".pet-like").prepend(obj);
                    carousel();
                    $('.mask-box, .details-open').click(function(){
                        $(".adopt-details").hide();
                        $('body,html').css('overflow-y', 'auto');
                    })
                }
            },
            error(){
                window.location.href = "../../../common/html/rec/recError500.html";
                
            }
        })

    }

})