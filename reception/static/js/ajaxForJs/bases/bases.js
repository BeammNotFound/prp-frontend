// 基地页面中所有的基地信息展示
document.write("<script src='static/configuration/ManConfig.js'></script>")

$(function (){
    $.ajax({
        url: MyPathConfig("queryBases"),
        type:"get",
        async:false,
        dataType:"json",  //注意，这里是json格式
        success(res) {
            if(res.code == 200){
            
               var str ="";
               for(var i = 0; i < res.data.length; i++){
                    if(i % 2 != 0){
                        str += 
                        `
                        <div class="row choose-main mb-lg-4 oddNumber">
                            <div class="col-lg-6 galsses-grid-right">
                                
                                <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                                <div class="line" data-blast="bgColor"></div>
                                <p class="mt-3 base-main">${res.data[i].b_intro} </p>
                                <div class="log-in mt-md-4 mt-3">
                                    <a class="btn text-uppercase" data-blast="bgColor" target="_blank" id="${res.data[i].base_id}">
                                    了解更多</a>
                                </div>
                            </div>
                            <div class="col-lg-6 galsses-grid-right">
                                <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                            </div>
                        </div>

                        `
                    }else{
                        str += 
                        `
                        <div class="row choose-main my-lg-4 my-3 evenNumber">
                            <div class="col-lg-6 galsses-grid-right mt-lg-4">
                                <img src="${res.data[i].b_icon}" alt="" class="img-fluid">
                            </div>
                            <div class="col-lg-6 galsses-grid-right mt-4">
        
                                <h4 class="post mt-3 base-name">${res.data[i].b_name}</h4>
                                <div class="line" data-blast="bgColor"></div>
                                <p class="mt-3 base-main">${res.data[i].b_intro}</p>
                                <div class="log-in mt-md-4 mt-3">
                                    <a class="btn text-uppercase" data-blast="bgColor" target="_blank" id="${res.data[i].base_id}">
                                    了解更多</a>
                                </div>
        
                            </div>
                        </div>
                        `
                    }

               }
               $(".bases").append(str);
               
            }else if(res.code){
               console.log(res.message); 
            }
         }
    })
    judgeIndex();
})

function judgeIndex(){
    $(".choose-main a").click(function(){
        var base_id = $(this).attr("id");
        // console.log(index);
        setCookie("base_id",base_id);
        $(".choose-main a").attr("href","base-particulars.html");
       
    })
}

function baseMessage(data){
    setCookie("base_message",data);
}