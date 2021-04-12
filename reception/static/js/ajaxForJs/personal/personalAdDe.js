$(function(){
    $('.base-adopt img').click(function(e){
        if(!e.isPropagationStopped()){
            $('.adopt-details, .mask-box').show();
            $('body,html').css('overflow-y', 'hidden');
    
            var piId = $(this).parent("div").attr('id');
            setCookie("piId",piId);
            var createTime = formatDate(JSON.parse(res.data[piId].pi_createtime));

            var str = 
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
            $(".pet-box").prepend(str);
            carousel();
        }
        setCookie("base_id",res.data[i].base_id);
        setCookie("pet_id",res.data[i].pi_id);

        e.stopPropagation();
    })
})