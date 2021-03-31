
document.write("<script src='../../../../../common/js/configuration/RecConfig.js'></script>")



    function aboveBtn(){
        $(".img-responsive").click(function(){
            // 点击只产生一个
            setCookie("id",$(this).attr("id"));
            adoptClick();
        })
    }

    function adoptClick(){
        $(".pet-content").remove();
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
                    console.log(res.data);

                    var aboveId = getCookie("id");
                    // console.log(res.data[aboveId]);
                    setCookie("pet_id",res.data[aboveId].pi_id);
                    var str = 
                    `
                    <div class="pet-content">
                        <div class="pet-img"> 
                            <ul> 
                            <li style="width: 277.8px;"><img src="${res.data[aboveId].pi_image_1}"></li>
                            <li><img src="${res.data[aboveId].pi_image_2}"></li>
                            <li><img src="${res.data[aboveId].pi_image_3}"></li>
                            <li><img src="${res.data[aboveId].pi_image_4}"></li>
                            </ul>
                        </div>
                        <div class="pet-text">
                            <p>姓&nbsp;&nbsp;&nbsp;名：${res.data[aboveId].pi_name}</p>
                            <p>品&nbsp;&nbsp;&nbsp;种：${res.data[aboveId].pi_breed}</p>
                            <p>年&nbsp;&nbsp;&nbsp;龄：${res.data[aboveId].pi_age}</p>
                            <p>疾病史：${res.data[aboveId].pi_DH}</p>
                            <p class="pet-introduce">简&nbsp;&nbsp;&nbsp;介：${res.data[aboveId].pi_intro}</p>

                    `
                    if(getCookie("user_data")){
                        str +=
                        `
                                <div  class="baseAdopt" style="position: relative;background-image: url(img/foot.png);height: 100px;background-repeat: no-repeat;background-size: 80px;float:right;margin-bottom:30px;width: 22%;">
                                <a href="applicatPet.html" target="_blank" style="position: absolute;left:29%;top: 49%;">
                                    领养
                                </a>
                                </div>
                            </div>
                        </div>
                        <div class="mask-box"></div>
                        `
                    }else{
                        str += 
                        `
                            <div style="float:left;margin-top: 27px;" class="contactAt">
                                <p style="color:red;font-size:12px">请您先登陆才可以领养小可爱哦~</p>
                            </div>
                            
                            <div  class="baseAdopt" style="position: relative;background-image: url(img/foot.png);height: 100px;background-repeat: no-repeat;background-size: 80px;float:right;margin-bottom:30px;width: 22%;">
                                <a href ="javascript:return false;" style="position: absolute;left:29%;top: 49%;" >
                                    领养
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mask-box"></div>
                        `
                    }
                    $(".baseAdopt a").attr('disabled',"true");
                    $('.pet-box, .mask-box').show();
                    $('body,html').css('overflow-y', 'hidden');
                    $(".pet-box").prepend(str);
                
                    $(".pet-img>ul>li").mouseenter(function(){
                        $(this).siblings("li").css("width","20px");
                        $(this).css("width","277.8px");
                    });

                    
                    

                   
                    
                }
            },
            error: function (error) {
                //请求失败之后进入该方法，errorMsg为失败后返回的错误信息
                console.log(error);
            }
        })
    }

//     function appPetClick(){
//         var user_data = getCookie("user_data");
//         var user_id = user_data.user_id;
//         var pet_id = getCookie("pet_id");
      
//             var index = getCookie("index");
//             var myJson = JSON.stringify({"base_id" : index,"pet_id" : pet_id,"user_id": user_id});
//             // console.log(myJson);
//             $.ajax({
//                 url: MyPathConfig("adoptPet"),
//                 type:"post",
//                 contentType:"application/json;charset=utf-8",  //注意，这里是json格式
//                 data : myJson,
//                 success(res){
//                 }
//             })
      
// }