// 基地详情中标题
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")

$(function () {
        var i = getCookie("base_id"); 
        var base_id = JSON.stringify({"base_id" : i});

        $.ajax({
            url: MyPathConfig("queryBasesById"),
            contentType:"application/json;charset=utf-8", 
            async:false,
            type:"post",
            data: base_id,
            success(res){
                if (res.code == 200) {  
                    var txt = "";
                    txt += `
                    <h1>${res.data.b_name}</h1>
                    <p style="margin-top:33px;">如果我有家，我也可以干干净净的</p>
                    <p>帮助流浪动物，我们一起行动</p>
                    
                    `;
                    $(".bg-text").append(txt);
                }
            }
        })
})