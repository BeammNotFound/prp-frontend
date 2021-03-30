document.write("<script src='static/configuration/ManConfig.js'></script>")


$(function () {
        var i = getCookie("base_id"); 

        // let item=[
        //     {
        //         "id":1,
        //         "name":"sb"
        //     },
        //     {
        //         "id":2,
        //         "name":"hahaha"
        //     }
        // ]
        // let id=1;
        // let v=item.find(v=> v.id==id?v:null)
        // console.log(v);
        var base_id =JSON.stringify({"base_id":i});

        $.ajax({
            url: MyPathConfig("queryBasesById"),
            contentType:"application/json;charset=utf-8", 
            async:false,
            type:"post",
            data: base_id,
            success(res){
                if (res.code == 200) {  
                    var data = res.data;
                    var text = data.b_name;
                    // 将所对应修改的模块通过js去增加到父元素中
                    var txt = "";
                    txt += `
                    <h1>${text}</h1>
                    <p style="margin-top:33px;">如果我有家，我也可以干干净净的</p>
                    <p>帮助流浪动物，我们一起行动</p>
                    
                    `;
                    $(".bg-text").append(txt);

                    $("#title").html(text);
                    var str = 
                        `
                        <div class="about-main">
                            <div class="col-md-6-base about-left">
                                <img src="${data.b_icon}" alt="">
                            </div>
    
                            <div class="col-md-6-base about-right">
                                <h3>${data.b_name}</h3>
                                <p class="paragraph" style=" display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden; ">
                                ${data.b_intro}</p>
                               
                                <ul class="contactList">
                                    <li>联系人：${data.b_contacts}</li>
                                    <li>联系电话：${data.b_phone}</li>
                                    <li>基地地址：${data.b_address}</li>
                                    <li>联系邮箱：${data.b_mail}</li>
                                </ul>
                                
                            </div>
                            <div class="bsclearfix"> </div>
                        </div>
                        <div class="about-main sec">
    
                            <div class="col-md-6-base about-right two">
                                <h3>${data.vi_title}</h3>
                                <p class="paragraph" style=" display: -webkit-box;-webkit-box-orient: vertical;overflow: hidden; ">
                                    ${data.vi_intro}
                                </p>
                                <ul class="list-group">
                                    <li>活动状态：${data.vi_status}</li>
                                    <li>活动总名额：${data.vi_population}</li>
                                    <li>已加入人数：${data.vi_joinPopulation}</li>
                                    <li>活动开始时间:${data.vi_start_time}</li>
                                    <li>活动截止时间:${data.vi_end_time}</li>
                                </ul>
    
                            </div>
                            <div class="col-md-6-base about-left two">
                                <img src="${data.b_image}" alt="">
                            </div>
    
                            <div class="bsclearfix"> </div>
                        </div>
                        `
                    }
                    
                    $("#container").append(str);
            }
        })
})