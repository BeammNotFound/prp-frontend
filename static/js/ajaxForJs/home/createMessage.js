document.write("<script src='static/configuration/myConfig.js'></script>")

// 用于轮播图中内容的传参更改
$(function(){
   // ajaxG()
   $.ajax({
    url: MyPathConfig("queryMessages"),
    dataType:"json",
    async:false,
    type:"get",
    success(res){
        if (res.code == 200) {
            // 将所对应修改的模块通过js去增加到父元素中
            var str = ` <div class="textmonial_active owl-carousel" id="ElementId">`;
            for(var i = 0; i < res.data.length; i++){
               str += 
               `
               <div class="testmonial_wrap">
                   <div class="single_testmonial d-flex align-items-centerdiv">
                       <div class="test_thumb">
                           <img src="${res.data[i].m_image}" alt="">
                       </div>
                                
                       <div class="test_content">
                           <h4>${res.data[i].m_title}</h4><span>${res.data[i].m_author}</span><p>${res.data[i].m_details}</p>
                       </div>
                   </div>
               </div>`;
            }
            str+=`</div>`
            $("#parent").append(str)
          // $("#ElementId").trigger("create")
        }
    }
})
})

// function ajaxG(){
 
//     $.ajax({
//         url:'http://192.168.1.233:8080/queryMessages',
//         dataType:"json",
//         async:false,
//         type:"get",
//         success(res){
//             if (res.code == 200) {
//               appendNews(res)
//             }
//         }
//     })
// }
// function appendNews(res){
//     console.log(res);
//     var str = ` <div class="textmonial_active owl-carousel" id="ElementId">`;
//     for(var i = 0; i < res.data.length; i++){
//        str += 
//        `
//        <div class="testmonial_wrap">
//            <div class="single_testmonial d-flex align-items-centerdiv">
//                <div class="test_thumb">
//                    <img src="${res.data[i].m_image}" alt="">
//                </div>
                        
//                <div class="test_content">
//                    <h4>${res.data[i].m_id}</h4><span>${res.data[i].m_author}</span><p>${res.data[i].m_details}</p>
//                </div>
//            </div>
//        </div>`;
//     }
//   str+=`</div>`
//   console.log(res);
//   $("#parent").append(str)
//   $("#ElementId").trigger("create")
// }
  