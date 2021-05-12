// // 用于获取点击科普的类型并渲染

// 
document.write("<script src='static/js/ajaxForJs/common/myConfig.js'></script>")


// $(function () {
//     $(".paragraph").click(function () {
       
//         // if($(this).children('a').hasClass("click")){
//         //     return false;
//         // }
//         // 创建数组，通过把所需要点击的几个模块的id放在数组中，最后拿到对应的索引值
//         var attr = ["breed","illness-btn","knowledge-btn"];
//         // var click = $(this).children('a').addClass('click');
//         var att = $(this).children('a').attr("id");
        
//         type = attr.indexOf(att) + 1;

//         // 将数据转化成json格式
//         var obj ={p_type : type};
       
//         var myJson = JSON.stringify(obj);
//         console.log(myJson);
//         $.ajax({
//             url: MyPathConfig("queryPopularizationsList"),
//             async:false,
//             type:"post",
//             contentType:"application/json;charset=utf-8",  //注意，这里是json格式
//             data : myJson,
//             success(res) {
//                 if(res.code == 200){
//                     console.log(res);
//                     var str = "";
//                     for(var i = 0; i < res.data.length; i++){
//                         if(res.data[i].p_details.length <= 103){
//                             str += 
//                             `
//                             <div class="science-main-box">
//                                 <div class="science-main">
//                                     <div class="science-index">
//                                         <div class="science-rank" id="scienceIndex">${i + 1}</div>
//                                     </div>

//                                     <div class="science-content">
//                                         <p class="science-title">${res.data[i].p_title}</p>
                                                
//                                         <div class="excerpt" >
//                                             <span class="science-excerpt">${res.data[i].p_details}</span> 
//                                         </div> 
//                                     </div>

//                                     <div class="science-img">
//                                         <img src="${res.data[i].p_image}" alt="">
//                                     </div>
//                                 </div>
//                             </div>
//                             `
//                         }else{
//                             str +=
//                             `
//                             <div class="science-main-box">
//                                 <div class="science-main">
//                                     <div class="science-index">
//                                         <div class="science-rank" id="scienceIndex">${i + 1}</div>
//                                     </div>

//                                     <div class="science-content">
//                                         <p class="science-title">${res.data[i].p_title}</p>
                                                
//                                         <div class="excerpt" >
//                                             <span class="science-excerpt">${res.data[i].p_details.substring(0,103)+'...'}</span> 
//                                             <span class="check-in" onclick="dianji();"><a  href="javascript:;">阅读全文</a></span>
//                                         </div>

//                                         <div class="element">
//                                             <span>${res.data[i].p_details}</span>
//                                             <div class="pick">
//                                                 <span class="check-out"><a href="javascript:;">收起全文</a></span>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div class="science-img">
//                                         <img src="${res.data[i].p_image}" alt="">
//                                     </div>
//                                 </div>
//                             </div>
//                             `
//                         }
                        
//                     }
                    
//                     $(".breed-box").append(str);
//                     console.log(res);
//                 }
//             },
//             error: function (error) {
//                 //请求失败之后进入该方法，errorMsg为失败后返回的错误信息
//                 console.log(error);
//             }
//         })
//     })
// })


// $(document).delegate('.check-in', 'click', function(){
//     console.log($(this).parent());
//     $(this).parent().hide();
//     $(this).parent().next().show();
//     $(this).parent().parent().parent().parent().height($(this).parent().next().height() + $(this).parent().prev().height() + 20);
// })

// $(document).delegate('.check-out', 'click', function(){
//     var n = $(this).parent().parent().parent().prev().children().html();
//     console.log(n);
//     $(this).parent().parent().hide();
//     $(this).parent().parent().prev().show();
//     $(this).parent().parent().parent().parent().parent().height(150);
//     // $('.science-box').scrollTop(0);
//     $('.science-box').scrollTop((n-1)*150);
//     console.log((n-1)*150);
// })
