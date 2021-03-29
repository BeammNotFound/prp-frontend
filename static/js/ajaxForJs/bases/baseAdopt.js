document.write("<script src='static/configuration/myConfig.js'></script>")

$(function (){
    var base_id = getCookie("base_id");
    var myJson = JSON.stringify({"base_id" : base_id});
    $.ajax({
        url: MyPathConfig("queryPetsInfoByBaseId"),
        // async:false,
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data : myJson,
        success(res) {
            if(res.code == 200){
                var str = "";
                for(var i = 0; i < res.data.length; i++){
                    str +=
                    `
                    <div class="col-md-6-base blog_img">
                        <div class="blog_con">
                            <div class="adoptImg">
                                <img src="${res.data[i].pi_image_1}" alt=" " class="img-responsive" id="${i}" >
                            </div>
                            <div class="blog_info">
                                <h5>${res.data[i].pi_name}</h5>
                                <h4>${res.data[i].pi_breed}</h4>
                                <p>${res.data[i].pi_intro.slice(0,37)}...</p>
                                <ul class="blog_list">
                                    <li  class="like"><span class="fa fa-heart" aria-hidden="true"></span><a href="javascript:;">10</a></li>
                                    <li></li>
                                    
                                </ul>
                            </div>
						</div>
					</div>
                    `
                }
                $(".blog_section").prepend(str);
                aboveBtn()
                $(".like").attr('flag','-1');
                $(".like").click(function(){
                    var result = parseInt($(this).text());
                    var flag =$(this).attr('flag');
                    result = result+flag*(-1);
                    flag *=-1;
                    $(this).attr('flag',flag);
                    $(this).text(result);
                    $(this).css("color","red");
                });
            }
        },
        error: function (error) {
            //请求失败之后进入该方法，errorMsg为失败后返回的错误信息
            console.log(error);
        }
      
    })
})
