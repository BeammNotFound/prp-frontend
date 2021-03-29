document.write("<script src='static/configuration/myConfig.js'></script>")
// document.write("<script src='js/skroll.min.js'></script>")
function click(data){
    $('.pet-photo, .pet-main h5').click(function(){
        var i = $(this).attr("id");
        var startTime = JSON.parse(data[i].vi_start_time);
        var endTime =JSON.parse(data[i].vi_end_time); 

                // 格式化josn字符串
        function formatDate(time) {
            var dt = new Date(parseInt(time));
            var year = dt.getFullYear();
            var month = dt.getMonth() + 1;
            month=("0"+month);
            month=month.substring(month.length-2);
            var date = dt.getDate();
            date=("0"+date);
            date=date.substring(date.length-2);
            // var hour = dt.getHours();
            // hour=("0"+hour);
            // hour=hour.substring(hour.length-2);
            // var minute = dt.getMinutes();
            // minute=("0"+minute);
            // minute=minute.substring(minute.length-2);
            // var second = dt.getSeconds();
            // second=("0"+second);
            // second=second.substring(second.length-2);

           return  year + "-" + month + "-" + date ;
            // console.log(ti);
        }

        
            var obj =
            `
            <div class="pet-content">
                <div class="content-img">
                    <img src = "img/adopt/volunteer2.jpg" alt="">
                    <img src="img/adopt/adopt.jpg" alt="">
                </div>
                <div class="content-main">
                    <p>基&nbsp;地&nbsp;名&nbsp;称&nbsp;：${data[i].b_name}</p>
                    <p>基&nbsp;地&nbsp;地&nbsp;址&nbsp;：${data[i].b_address}</p>
                    <p>所&nbsp;需&nbsp;人&nbsp;数&nbsp;：${data[i].vi_population}名</p>
                    <p>已加入人数&nbsp;：${data[i].vi_joinPopulation}名</p>
                    <p>报&nbsp;名&nbsp;状&nbsp;态&nbsp;：${data[i].vi_status}</p>
                    <p>报&nbsp;名&nbsp;要&nbsp;求&nbsp;：诚实守信、精诚团结</p>
                    <p>负责人姓名&nbsp;：${data[i].b_contacts}</p>
                    <p>负责人电话&nbsp;：${data[i].b_phone}</p>
                    <p>活动开始时间：${formatDate(startTime)}</p>
                    <p>活动结束时间：${formatDate(endTime)}</p>
                    <p>基&nbsp;地&nbsp;介&nbsp;绍&nbsp;：${data[i].b_intro}</p>    
                    <div class="baseAdopt">
                        <a href="appliVolunteer.html" target="_blank">志愿者<br>申请</a>
                    </div>
                </div>
            </div>
            
            `
            setCookie("base_id", data[i].base_id);
            $(".pet-box").append(obj);

            $('.pet-box, .mask-box').show();
            $('.pet-content').fadeIn(500);
            $('body,html').css('overflow-y', 'hidden');

            
    });
    
}

$(function (){

    $.ajax({
        url: MyPathConfig("queryAllVolunteer"),
        dataType:"json",
        async:false,
        type:"get",
        success(res){
            if (res.code == 200) {
                var data = res.data;
                click(data);
            }
        }
    })

})
