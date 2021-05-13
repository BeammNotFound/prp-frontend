// 个人主页中展示申请志愿者列表
document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")
$(function(){
    var data = JSON.parse(getCookie("user_data"));
    var user_id = data.user_id;
    var myJson = JSON.stringify({"user_id": user_id})
    $.ajax({
        url: MyPathConfig("queryUserApplication"),
        type:"post",
        contentType:"application/json;charset=utf-8", 
        data : myJson,
        success(res) {
            if(res.code == 200){
                var data = res.data;
                
                if(data.av_pass_time == null){
                    var passTime =  "暂未审核";
                }else{
                    passTime= formatDate(data.av_pass_time) ;
                }
            
                var appTime = formatDate(data.av_application_time) ;
                var str = "";
                    str += 
                        `
                            
                            <p><span>基&nbsp;地&nbsp;名&nbsp;称&nbsp;：</span> <span>${data.b_name}</span></p>
                            <p><span>基&nbsp;地&nbsp;地&nbsp;址&nbsp;：</span> <span>${data.b_address}</span></p>
                            <p><span>负责人姓名：</span> <span>${data.b_contacts}</span></p>
                            <p><span>负责人电话：</span> <span>${data.b_phone}</span></p>
                            <p><span>报&nbsp;名&nbsp;状&nbsp;态&nbsp;：</span> <span>${data.av_status}</span></p>
                            <p><span>申&nbsp;请&nbsp;时&nbsp;间&nbsp;：</span> <span>${appTime}</span></p>
                            <p><span>通&nbsp;过&nbsp;时&nbsp;间&nbsp;：</span> <span>${passTime}</span></p>
                            <p><span>基&nbsp;地&nbsp;介&nbsp;绍&nbsp;：</span> <span class="introduce">${data.b_intro}</span></p>
                            <div class="basePhoto" style="margin-top: 1rem;"><img src="${data.b_icon}" alt=""></div>
                            <a href="base-particulars.html" class="joinBase">进入基地</a>
                            <a href="javascript:;" class="joinBase" style="margin-right: 10px;" id="cancelVolunteer">取消申请</a>
                        `
                $("#volunteer").after(str);
                setCookie("base_id",data.base_id);
                click();
            }else if(res.code == 412){

            }
        },
        error(error) {
            window.location.href = "../../../../common/html/rec/recError500.html";
        }
    })
})

function formatDate(time) {
    
    var dt = new Date(parseInt(time));
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    month=("0"+month);
    month=month.substring(month.length-2);
    var date = dt.getDate();
    date=("0"+date);
    date=date.substring(date.length-2);
    var hour = dt.getHours();
    hour=("0"+hour);
    hour=hour.substring(hour.length-2);
    var minute = dt.getMinutes();
    minute=("0"+minute);
    minute=minute.substring(minute.length-2);
    var second = dt.getSeconds();
    second=("0"+second);
    second=second.substring(second.length-2);

   return  year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    // console.log(ti);
}

function click(){
    // 取消申请志愿者
    $("#cancelVolunteer").click(function(){
        sweetAlert({
            title: "Are you sure?",
            text: "确认取消申请吗？",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false
          }, function(){
            swal("Deleted!",
            "Your imaginary file has been deleted.",
            "success"
        );
        var data = JSON.parse(getCookie("user_data"));
        var user_id = data.user_id;
        var myJson = JSON.stringify({"user_id": user_id});
        console.log(myJson);
            $.ajax({
                url: MyPathConfig("cancelApplicationVolunteer"),
                type:"post",
                contentType:"application/json;charset=utf-8", 
                data : myJson,
                success(res) {
                    sweetAlert({
                        title: "成功",
                        text: res.message,
                        type: "success",
                        confirmButtonText :"确认",
                        confirmButtonColor: "rgb(238,55,21)",
                        closeOnConfirm : false,
                    }, function(){
                        window.location.reload();
                    });
                },
                error(error) {
                    console.log(error);
                }
            })
        })
    });
}