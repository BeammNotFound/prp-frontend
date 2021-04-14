// 基地页面中的搜索功能
// document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")


$(function (){
  
    // 回车键搜索
    $(document).keydown(function(event) {
       event = event || window.event; //window.event,是为了兼容IE
       //按下了回车键
       if (event.keyCode == 13) {
          search();
       }
    }); 


    //  点击搜索
    $("#base-search-submit").click(function () {
      search();
    });

 })
    

function search (){
    $(".oddNumber").remove();
    $(".evenNumber").remove();
    var text = $("#base-search-input").val();
    var data = {"b_name" : text};
    myJson = JSON.stringify(data);
    $.ajax({
        url: MyPathConfig("fuzzyQueryBases"),
        type:"post",
        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
        data:myJson,
        success(res) {
        if(res.code == 200){
            var str ="";
            for(var i = 0; i < res.data.length; i++){
                if(i % 2 != 0){
                    //  console.log(i);
                    str += 
                    `
                    <div class="row choose-main my-lg-4 my-3 oddNumber">
                        <div class="col-lg-6 galsses-grid-right mt-lg-4">
                            <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                        </div>
                        <div class="col-lg-6 galsses-grid-right mt-4">

                            <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="mt-3 base-main">${res.data[i].b_intro} </p>
                            <div class="log-in mt-md-4 mt-3">
                                <a href="base-particulars.html" class="btn text-uppercase" data-blast="bgColor" href="javascript:;" id="${res.data[i].base_id}">
                                    了解更多
                                </a>
                            </div>

                        </div>
                    </div>

                    `
                }else{
                    //  console.log(i);
                    str += 
                    `
                    <div class="row choose-main mb-lg-4 evenNumber">
                        <div class="col-lg-6 col-lg-push-6 col-md-12 col-md-push-6 galsses-grid-right">
                            <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                        </div>
                        <div class="col-lg-6 col-lg-pull-6 col-md-12 col-md-pull-6 galsses-grid-right basee-introduce">
                            <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                            <div class="line" data-blast="bgColor"></div>
                            <p class="mt-3 base-main">${res.data[i].b_intro}</p>
                            <div class="log-in mt-md-4 mt-3">
                                <a href="base-particulars.html" class="btn text-uppercase" data-blast="bgColor" href="javascript:;" id="${res.data[i].base_id}">
                                    了解更多</a>
                            </div>
                        </div>

                    </div>
                    `
                }

            }
            $("#bases").append(str);

        }else if(res.code == 412){
            var str =
            `
            <div style = "width:100%;height:200px;" class="row choose-main mb-lg-4 oddNumber">
                <img src="img/qaq.PNG" style="width:20%;margin-left:150px;"> 
                <h2 style="margin:auto;">${res.message}</h2>
                
            </div>
            `
            $("#bases").append(str);
        }
        },
        error(){
            window.location.href = "../../../common/html/rec/recError500.html"
        }
    })

}
