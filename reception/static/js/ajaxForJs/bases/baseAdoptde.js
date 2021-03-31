// 基地详情中宠物领养的详情
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")
document.write("<script src='../../../../../common/js/cookieUtil.js'></script>")


function aboveBtn(){
    //点击一个宠物，显示宠物详细页面

    $(".adoptBox img").click(function(){
        $('.base-adopt-eare, .mask-box').show();
        $('body,html').css('overflow-y', 'hidden');

        var piId = $(this).parent("div").attr('id');
        setCookie("piId",piId);
        adoptClick()
    })
}
function adoptClick(){

    $("#adoptDetail").remove();

    var myJson = JSON.stringify({"base_id" : getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryPetsInfoByBaseId"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                console.log(res.data);
                var piId = getCookie("piId");

                setCookie("pi_id",res.data[piId].pi_id);
                var str = 
                `
                <div class="row" id="adoptDetail">
                    <div class="col-lg-4">
                        <div class="addetalis-img">
                            <img src="${res.data[piId].pi_image_2}" alt="">
                            <img src="${res.data[piId].pi_image_3}" alt="">
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="content-main">
                        <p>姓&nbsp;&nbsp;&nbsp;名：${res.data[piId].pi_name}</p>
                        <p>品&nbsp;&nbsp;&nbsp;种：${res.data[piId].pi_breed}</p>
                        <p>年&nbsp;&nbsp;&nbsp;龄：${res.data[piId].pi_age}</p>
                        <p>疾病史：${res.data[piId].pi_DH}</p>
                        <p class="pet-introduce">简&nbsp;&nbsp;&nbsp;介：${res.data[piId].pi_intro}</p>

                        <div class="btn-box">
                            <div class="grid__item theme-2">
                                <button class="action"><svg class="icon icon--rewind"><use xlink:href="#icon-rewind"></use></svg></button>
                                <button class="particles-button">领养</button>
                            </div>
                        </div>
                    </div>
                </div>

            `
            $(".details-top").append(str);
            }else{
                error404();
            }
                

        },
        error: function () {
            error500();
        }
    })

}