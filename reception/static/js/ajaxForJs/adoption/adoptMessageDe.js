// 领养页面中宠物详情信息
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


function click(data){
    $('.pet-photo, .pet-main h5').click(function(){
            var i = $(this).attr("id");
            var obj =
            `
            <div class="pet-content">
                <div class="content-img">
                    <img src="${data[i].pi_image_1}" alt="">
                    <img src="${data[i].pi_image_2}" alt="">
                    <img src="${data[i].pi_image_3}" alt="">
                    <img src="${data[i].pi_image_4}" alt="">
                </div>
                <div class="content-main">
                    <p>姓&nbsp;&nbsp;&nbsp;名：${data[i].pi_name}</p>
                    <p>品&nbsp;&nbsp;&nbsp;种：${data[i].pi_breed}</p>
                    <p>年&nbsp;&nbsp;&nbsp;龄：${data[i].pi_age}</p>
                    <p>疾病史：${data[i].pi_DH}</p>
                    <p class="pet-introduce">简&nbsp;&nbsp;&nbsp;介： ${data[i].pi_intro}</p>
                    <div class="baseInto">
                        <a href="base-particulars.html" target="_blank">基地</a>
                    </div>
                    <div class="baseAdopt">
                        <a href="applicatPet.html" target="_blank">领养</a>
                    </div>
                </div>
            </div>

            `
            setCookie("base_id",data[i].base_id);
            setCookie("pet_id",data[i].pi_id);

            $(".pet-box").append(obj);

            $('.pet-box, .mask-box').show();
            $('.pet-content').fadeIn(500);
            $('body,html').css('overflow-y', 'hidden');

            
    });
}

$(function (){

    $.ajax({
        url: MyPathConfig("queryAllPetsInfo"),
        dataType:"json",
        async:false,
        type:"get",
        success(res){
            if (res.code == 200) {
                var data = res.data;
                click(data);
            }
        }
    })

})
