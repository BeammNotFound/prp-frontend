// 基地详情中的资讯
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function(){
    var myJson = JSON.stringify({"base_id" : getCookie("base_id")});

    $.ajax({
        url: MyPathConfig("queryBaseMessagesById"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if (res.code == 200) {
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                str += 
                `
                <div class="media news-eare" style="margin-top: 30px;">
                    <div class="media-body news-content news-one bese-news-content" title="点我了解详情">
                        <h3 class="media-heading news-headline">
                        ${res.data[i].bm_title}
                        </h3>
                        ${res.data[i].bm_detail}

                    </div>
                </div>
                `
                }
               
                $(".base-news-title").after(str);
                
            }
        },
        error : function(){
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })
})