document.write("<script src='static/configuration/ManConfig.js'></script>")


$(function(){
    var data = JSON.parse(getCookie("user_data"));
    var user_id = data.user_id;
    var myJson = JSON.stringify({"user_id": user_id})
    $.ajax({
        url: MyPathConfig("queryAdoptPetById"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : myJson,
        success(res) {
            if(res.code == 200){
                var i = 0;
                for(var i = 0; i < res.data.length; i++){
                    var str = 
                        `
                        <div class="adoption-Pet">
                            <div class="pet-photo">
                                <a href="javascript:;" class="adoption-a" id="${[i]}">
                                    <img src="${res.data[i].pi_image_1}" alt="">
                                </a>
                            </div>
                            <div id="pet-content">
                                <p>姓名：${res.data[i].pi_name}</p>
                                <p>品种：${res.data[i].pi_breed}</p>
                                <p>年龄：${res.data[i].pi_age}</p>
                                <p>疾病史：${res.data[i].pi_DH}</p>
                                <p>简介：${res.data[i].pi_intro.slice(0,10)}...</p>
                            </div>
                        </div>
                        `
                        $("#personal-adopt").append(str);


                        var data = res.data;
                        $(".adoption-a").click(function(e){
                            if(!e.isPropagationStopped()){
                                var i = $(this).attr("id");
                                console.log(data);
                                var obj =
                                `
                                <div class="pet-content">
                                    <div class="content-img">
                                        <img src="${data[i].pi_image_1}" alt="">
                                        <img src="${data[i].pi_image_2}" alt="">
                                        <img src="${data[i].pi_image_3}" alt="">
                                        <img src="${data[i].pi_image_4}" alt="">
                                    </div>
                                    <div class="content-main">
                                        <p>姓&nbsp;&nbsp;&nbsp;名：${data[i].pi_name}</p>
                                        <p>品&nbsp;&nbsp;&nbsp;种：${data[i].pi_breed}</p>
                                        <p>年&nbsp;&nbsp;&nbsp;龄：${data[i].pi_age}</p>
                                        <p>疾病史：${data[i].pi_DH}</p>
                                        <p class="pet-introduce">简&nbsp;&nbsp;&nbsp;介： ${data[i].pi_intro}</p>
                                        <div class="baseInto">
                                            <a href="base-particulars.html" target="_blank">基地</a>
                                        </div>
                                        <div class="baseAdopt">
                                            <a href="applicatPet.html" target="_blank">领养</a>
                                        </div>
                                    </div>
                                </div>
                                `
                                setCookie("base_id",data[i].base_id);
                                setCookie("pet_id",data[i].pi_id);

                                $(".pet-box").append(obj);

                                $('.pet-box, .mask-box').show();
                                $('.pet-content').fadeIn(500);
                                $('body,html').css('overflow-y', 'hidden');
                                }
                            e.stopPropagation();
                        })
                               
                        
                    }
            }else{
                $("#personal-adopt h5").html(res.message);
                
            }
               
        },
        error(error) {
            console.log(error);
        }
    })
})

