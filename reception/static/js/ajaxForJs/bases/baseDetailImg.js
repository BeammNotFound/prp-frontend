
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")


$(function (){
    var base_id = getCookie("base_id");
    var obj = {"base_id" : base_id};
    var myJson = JSON.stringify(obj);
    $.ajax({
        url: MyPathConfig("queryBasesImagesById"),
        // async:false,
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                var str = "";
                // var data = res.data.slice(0,4);
                for(var i = 0; i < res.data.length; i++){
                    if(i <= 3){
                        str +=
                        `
                        <div class="col-md-6-base portfolio-grids" data-aos="zoom-in" style="width:285px;height:164.9px;">
                            <img src="${res.data[i].bi_image}" class="b-link-stripe b-animate-go lightninBox" data-lb-group="1" style="width:285px;height:164.9px;object-fit: cover;object-position: center;">
                        </div>
                        `
                    }else {
                       
                        var obj =
                        `
                        <div style="width:555px;height:329.8px">
                            <img src="${res.data[i].bi_image}" class="b-link-stripe b-animate-go lightninBox" data-lb-group="1" style="width:555px;height:329.8px;object-fit: cover;object-position: center;">
                        </div>
                        `
                    }
                    
                }
                $(".portfolio-grids_left").append(str);
                $(".sec_img").append(obj);

            }
        },
        error: function (error) {
            //请求失败之后进入该方法，errorMsg为失败后返回的错误信息
            console.log(error);
            
        }
    })
})