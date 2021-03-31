
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")


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
                     str += 
                    `
                    <li class="item"><img src="${res.data[i].bi_image}" alt=""></li>
                    `
                }
                
                $(".list").append(str);

            }else{
                error404();
            }
        },
        error: function () {
            error500();
        }
    })
})