// 个人主页中的喜欢宠物列表
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")

$(function(){
    var data = JSON.parse(getCookie("user_data"));
    var user_id = data.user_id;
    var myJson = JSON.stringify({"user_id": user_id})


    $.ajax({
        url: MyPathConfig("queryPetStarByUser_id"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : myJson,
        success(res) {
            if(res.code == 200){
                for(var i = 0; i < res.data.length; i++){
                    var str = 
                        `
                        <div class="adoption-Pet">
                            <div class="like-photo"  id="${[i]}">
                                <a href="javascript:;" class="adoption-a">
                                    <img src="${res.data[i].pi_image_1}" alt="" >
                                </a>
                            </div>
                            <div id="pet-content">
                                <p>姓名：${res.data[i].pi_name}</p>
                                <p>品种：${res.data[i].pi_breed}</p>
                                <p>年龄：${res.data[i].pi_age}</p>
                                <p>疾病史：${res.data[i].pi_DH}</p>
                                
                            </div>
                        </div>
                        `
                        $("#personal-like").append(str);
                        
                }
                likeDeClick();
                carousel();

            }else if(res.code == 412){
                $("#personal-like h5").html(res.message);
            }
               
        },
        error() {
            // window.location.href = "../../../common/html/rec/recError500.html"

        }
    })
})

