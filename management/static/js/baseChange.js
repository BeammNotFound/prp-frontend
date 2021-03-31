document.write("<script src='../../../common/js/configuration/ManConfig.js'></script>")
document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='../../../common/js/cookieUtil.js'></script>")


// 修改基地信息
$(function(){

    layui.use(['form', 'layer'],
        function() {
            $ = layui.jquery;
            var form = layui.form,
            layer = layui.layer;

            form.on('submit(change)',
                function(data) {

                    var b_name = $("#base_name").val();
                    var base_address = $("#base_address").val();
                    var b_contacts = $('.b_contacts').val();
                    var b_intro = $("#b_intro").val();
                    var b_mail = $("#b_mail").val();
                    var b_phone= $("#b_phone").val();
                    var b_createtime = $("#b_createtime").val();
                    
                    var myJson = JSON.stringify({"base_id": getCookie("base_id"), "b_name":b_name, "base_address":base_address, "b_contacts": b_contacts, "b_intro": b_intro,"b_mail":b_mail,"b_phone":b_phone,"b_createtime":b_createtime});
                    $.ajax({
                        url: MyPathConfig("changeBasesByBaseId"),
                        type:"post",
                        contentType:"application/json;charset=utf-8",  //注意，这里是json格式
                        data : myJson,
                        success(res){
                            console.log(res);
                            if(res.code == 200){

                                var base_info = JSON.parse(getCookie("base_info"))
                                base_info.b_name = b_name;
                                base_info.base_address = base_address;
                                base_info.b_contacts = b_contacts;
                                base_info.b_intro = b_intro;
                                base_info.b_mail = b_mail;
                                base_info.b_phone = b_phone;
                                setCookie("base_info",JSON.stringify(base_info))
                                // window.location.reload();
                                layer.msg('信息更改成功!',{icon:1,time:1000});
                            }else if(res.code == 404){
                                error404();
                            }
                        },
                        error(error) {
                            error500();
                        }
                    })
            })
        })
})