document.write("<script src='static/configuration/myConfig.js'></script>")

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
                    <div class="col-lg-4 col-md-6">
                        <div class="single_service">
                                <div class="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
                                    <div class="service_icon">
                                        <a href="base-particulars.html" id="${res.data[i].base_id}" target="_blank">
                                            <img src="${res.data[i].b_icon}" alt=""style="object-fit: cover;border-radius: 50%;width:160px;">
                                        </a>
                                    </div>
                                </div>
                                <div class="service_content text-center">
                                <h3>${res.data[i].b_name}</h3>
                                <p style="display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;  ">${res.data[i].b_intro}</p>
                               
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
    $(".service_icon a").click(function(){
        var base_id = $(this).attr("id");
        setCookie("base_id",base_id);
        $(".service_icon a").attr("href","base-particulars.html");
    })
}
