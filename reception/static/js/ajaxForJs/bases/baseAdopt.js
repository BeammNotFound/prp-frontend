
// 基地详情中宠物领养展示
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
    var myJson = JSON.stringify({"base_id" : getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryPetsInfoByBaseId"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                    str +=
                    `
                    <div class="col-lg-4 col-md-6">
                        <div class="thumbnail adoptBox" id="${[i]}">
                            <img src="${res.data[i].pi_image_1}" alt="...">
                            <div class="caption">
                                <h3>${res.data[i].pi_name}</h3>
                                <p>${res.data[i].pi_intro.substring(0,15)}</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    `
                }
                $("#adopt").prepend(str);
                aboveBtn();
                
            }
        },
        error: function () {
            window.location.href = "../../../common/html/rec/recError500.html"
        }
      
    })
})
