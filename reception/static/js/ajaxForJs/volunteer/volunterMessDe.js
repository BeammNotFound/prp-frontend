// 志愿者页面中活动详情

document.write("<script src='static/js/ajaxForJs/common/cookieUtil.js'></script>")
document.write("<script src='static/js/ajaxForJs/common/formateDate.js'></script>")
document.write("<script src='static/js/myjs/slideshow.js'></script>")

    

$(function (){
    volunteerClick();
    function volunteerClick(){
        $('.content-img, .content-text>h5').click(function(){
            $(".adopt-details").show();
            $('body,html').css('overflow', 'hidden');
            var i = $(this).attr("id");
            click(i);
        })
    }
    
    function click(i){
        $('#volunDe').remove();
        $.ajax({
            url: MyPathConfig("queryAllVolunteer"),
            dataType:"json",
            async:false,
            type:"get",
            success(res){
                if (res.code == 200) {
                    var data = res.data;
                    var startTime = res.data[i].vi_create_time;
                    var endTime = res.data[i].vi_end_time;
                    var obj =""
                    obj +=
                    `
                    <div id="volunDe">
                        <div class="adopt-base">
                            <div class="adopt-base-img">
                                <img src="${data[i].b_icon}" alt="">
                            </div>
                            <div class="adopt-base-name">
                                <h3>${data[i].b_name}</h3>
                                <p style="color: #929292;font-size: 13px;">${data[i].b_intro}</p>
                            </div>
                        </div>
                        <div class="pet-introduce">
                            <div class="base-introduce">
                                <p style="margin-bottom: 0px;"><span>负责人姓名：</span>${data[i].b_contacts}</p>
                                <p style="margin-bottom: 5px;"><span>负责人电话：</span>${data[i].b_phone}</p>
                            </div>

                            <div id="wrap" >
                                <ul class="list" >
                                    <li class="item active"><img src="${data[i].bi_image1}" alt=""></li>
                                    <li class="item"><img src="${data[i].bi_image2}" alt=""></li>
                                    <li class="item"><img src="${data[i].bi_image3}" alt=""></li>
                                    <li class="item"><img src="${data[i].bi_image4}" alt=""></li>
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
                            <p class="text-center" style="color: #929292; font-size: 13px;">${data[i].b_address}</p>
                            <p style="margin-top: 28px;"><span>报名要求：</span>善良，爱护动物</p>
                            <div class="registration-information">
                                <p><span>所需人数：</span>${data[i].vi_population}名</p>
                                <p><span>报名人数：</span>${data[i].vi_joinPopulation}名</p>
                                <p><span>报名状态：</span>${data[i].vi_status}</p>
                            </div>
                            <div class="registration-time">
                                <p><span>活动开始时间：</span> ${formatDate(startTime)}</p>
                                <p><span>活动结束时间：</span> ${formatDate(endTime)}</p>
                            </div>
                        </div>
                    </div>


                    `
                    setCookie("base_id", data[i].base_id);
                    $(".adopt-details-top").prepend(obj);
                    carousel();
                    
                    $('.mask-box, .details-open').click(function(){
                        $(".adopt-details").hide();
                        $('body,html').css('overflow-y', 'auto');
                    })

                }
            },
            error: function(){
                window.location.href = "../../../../common/html/rec/recError500.html"
            }
        })
    }
})
