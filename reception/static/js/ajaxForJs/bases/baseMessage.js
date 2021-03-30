document.write("<script src='static/configuration/ManConfig.js'></script>")

$(function(){
    var base_id = getCookie("base_id");
    var myJson = JSON.stringify({"base_id" : base_id});
    // console.log(myJson);
    $.ajax({
        url: MyPathConfig("queryBaseMessagesById"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res){
            if (res.code == 200) {
                // 将所对应修改的模块通过js去增加到父元素中
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                str += 
                `
                <div class="item ">
                    <div class="inner-testimonials">
                        <img src="${res.data[i].bm_image}" alt=" " class="img-responsive" />
                        <div class="teastmonial-info">
                            <h5>${res.data[i].bm_title}</h5>
                            <span>${res.data[i].bm_title}</span>
                            <p class="paragraph">${res.data[i].bm_detail}</p>
                        </div>
                    </div>
                </div>
                `
                
                }
               
                $("#baseMessage").prepend(str);
                var active = $("#baseMessage").children("div").first();
                active.addClass("active");
                // $("#ElementId").trigger("create")
            }
        }
    })
})