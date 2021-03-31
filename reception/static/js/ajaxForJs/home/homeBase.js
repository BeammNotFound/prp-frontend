// 首页中的基地信息展示
// 
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")

$(function (){

    $.ajax({
        url: MyPathConfig("queryBases"),
        dataType:"json",
        async:false,
        type:"get",
        success(res){
            if (res.code == 200) {
                // 将所对应修改的模块通过js去增加到父元素中
                var str = "";
                var data = res.data.slice(0,3);
                for(var i = 0; i < data.length; i++){
                    str += 
                    `
                    <div class="col-lg-4 col-md-6 base-introduce" id="${res.data[i].base_id}">
                        <div class="single_service" >
                            <div class="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                                <div class="service_icon" style="width: 260px;height: 150px;">
                                    <img src="${res.data[i].b_icon}" alt="">
                                </div>
                            </div>
                            <div class="service_content text-center">
                                <h3>${res.data[i].b_name}</h3>
                                <p>${res.data[i].b_intro.substring(0,10) + '...'}</p>
                            </div>
                        </div>
                    </div>
                    `
                }
                $("#baseText").append(str);
                // $("#ElementId").trigger("create")
            }
        }
    })
    judgeIndex();
})

function judgeIndex(){
    $('.base-introduce').click(function() {
        var base_id = $(this).attr("id");
        setCookie("base_id",base_id);
        window.open("base-particulars.html");
    });
    // $(".service_icon a").click(function(){
    //     var base_id = $(this).attr("id");
    //     setCookie("base_id",base_id);
    //     $(".service_icon a").attr("href","base-particulars.html");
    // })
}
