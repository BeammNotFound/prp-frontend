
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")



$(function(){
    $.ajax({
        url: MyPathConfig("getBackground"),
        type:"get",
        dataType:"json",
        async:false, 
        success(res) {
            if(res.code == 200){
                var str = 
                `
                <img src="${res.data.i_src}" alt="" class="cover-img">
                `
                $(".cover-img-box").append(str);
            }
        },
        error(error) {
            //  console.log(error);
        }
    })
})