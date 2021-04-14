
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
    var data =JSON.parse(getCookie("user_data")) ;
    var attr = [data.user_nickname, data.user_sex, data.user_phone, data.user_city,data.user_address,data.user_info,data.user_intro];
    
    var address = data.user_city + data.user_address;
    var img = 
    `
    <img src="${data.user_icon}" alt="" id="preview">
    `
    $(".profile-photo").append(img);

    for(var i=0;i<attr.length; i++){
        if(attr[i]==null)
        {
            var str =
            `
            <div class="data">
                <h1>
                    <span class="nickname">${data.user_nickname}</span>
                </h1>
                <p style="font-size: 14px;margin-top: 5px;color: #797070c2;font-weight: 600;">${data.user_info}</p>
                <p class="signature" style="margin-top:35px;">个人简介：<span>${data.user_intro}</span></p>
                <div style="margin-top:11rem;">
                    <img src="img/message.jpg" style="width: 4rem;">
                    <span style="color:red;margin-left:3rem;">请您完善个人资料哦，点击编辑资料即可完善~~</span>
                </div>
                

                <a href="modified-data.html" class="compile">编辑个人资料</a>
            </div>
            `
        }else{
            var str =
            `
            <div class="data">
                <h1>
                    <span class="nickname">${data.user_nickname}</span>
                </h1>
                <p style="font-size: 14px;margin-top: 5px;color: #797070c2;font-weight: 600;">${data.user_info}</p>
                <p class="signature" style="margin-top:35px;">个人简介：<span>${data.user_intro}</span></p>
                <p>性别：<span>${data.user_sex}</span></p>
                <p>年龄：<span>${data.user_age}</span></p>
                <p>所在地：<span>${address}</span></p>
                <p>手机号码：<span>${data.user_phone}</span></p> 
        
                <a href="modified-data.html" class="compile">编辑个人资料</a>

            </div>
            `
        }
        
    }
    
    $(".exit").before(str);
})

