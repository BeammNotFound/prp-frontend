
// 基地详情页中轮播中的图片
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
    var myJson = JSON.stringify({"base_id" : getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryBasesImagesById"),
        async:false,
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                    if(i == 0){
                        var str = 
                        `
                        <li class="item active"><img src="${res.data[i].bi_image}" alt=""></li>
                        `
                    }else{
                        str += 
                        `
                        <li class="item"><img src="${res.data[i].bi_image}" alt=""></li>
                        `
                    }
                    
                }
                
                $(".list").append(str);

            }
        },
        error: function () {
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })
})