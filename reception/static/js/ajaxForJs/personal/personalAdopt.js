// 个人主页中的领养列表
document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")

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
                for(var i = 0; i < res.data.length; i++){
                    var str = 
                        `
                        <div class="adoption-Pet">
                            <div class="pet-photo"  id="${[i]}">
                                <a href="javascript:;" class="adoption-a">
                                    <img src="${res.data[i].pi_image_1}" alt="" >
                                </a>
                            </div>
                            <div id="pet-content">
                                <p>姓&nbsp;&nbsp;&nbsp;&nbsp;名：${res.data[i].pi_name}</p>
                                <p>品&nbsp;&nbsp;&nbsp;&nbsp;种：${res.data[i].pi_breed}</p>
                                <p>年&nbsp;&nbsp;&nbsp;&nbsp;龄：${res.data[i].pi_age}</p>
                                <p>疾病史：${res.data[i].pi_DH.substring(0,10)}</p>
                                <p>审批状态：${res.data[i].ap_status}</p>
                                
                            </div>
                        </div>
                        `
                        $("#personal-adopt").append(str);
                        
                }
                adoptDeClick();
                carousel();

            }else if(res.code == 412){
                $("#personal-adopt h5").html(res.message);
            }
               
        },
        error() {
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })
})

