 document.write("<script src='static/js/config/myConfig.js'></script>")




document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")


// 宠物列表中的修改

    var arr = JSON.parse(getCookie("arr"));
    var pi_id = arr.pi_id;
    var pi_name = $('input:text[name="username"]').val(arr.pi_name);
    var pi_breed = $('input:text[name="breed"]').val(arr.pi_breed);
    var pi_age = $('input:text[name="age"]').val(arr.pi_age);
    var pi_DH = $('input:text[name="DH"]').val(arr.pi_DH);
    var pi_intro = $("#L_pi_intro").val(arr.pi_intro);


    layui.use(['form', 'layer'],
        function() {
            $ = layui.jquery;
            var form = layui.form,
            layer = layui.layer;

            //自定义验证规则
            form.verify({
                nikename: function(value) {
                    if (value.length < 1) {
                        return '昵称至少得1个字符啊';
                    }
                },
                breed: function(value) {
                    if (value.length < 1) {
                        return '品种不可以为空';
                    }
                },
                age:function(value){
                    if (value.length < 1) {
                        return '年龄不可以为空';
                    }
                },
                DH:function(value){
                    if (value.length < 1) {
                        return '疾病史没有请填无';
                    }
                },
                intro:function(value){
                    if (value.length < 1) {
                        return '简介不可以为空';
                    }
                }
                
            });

            //监听提交
            form.on('submit(add)',
            function(data) {
                pi_name = $("#L_username").val();
                pi_breed = $("#L_pi_breed").val();
                pi_age = $("#L_pi_age").val();
                pi_DH = $("#L_pi_DH").val();
                pi_intro = $("#L_pi_intro").val();

                //发异步，把数据提交给php
                var myJson = JSON.stringify({"pi_id" : pi_id,"pi_name" : pi_name, "pi_breed" : pi_breed, "pi_age" : pi_age, "pi_DH" : pi_DH, "pi_intro" : pi_intro})

                $.ajax({
                    url: MyPathConfig("changePetInfo"),
                    type:"post",
                    contentType:"application/json;charset=utf-8",  //注意，这里是json格式
                    data : myJson,
                    success(res){
                        if(res.code == 200){
                            layer.alert("修改成功", {
                                icon: 1
                            },
                            function() {
                                // 获得frame索引
                                var index = parent.layer.getFrameIndex(window.name);
                                // layer.close(layer.index); 
                                //关闭当前frame
                                parent.layer.close(index);
                                parent.location.reload();
                            });
                            return false;
                        }
                        else{
                            layer.alert(res.message, {
                                icon: 5
                            },
                            function() {
                                // 获得frame索引
                                var index = parent.layer.getFrameIndex(window.name);
                                // layer.close(layer.index); 
                                //关闭当前frame
                                parent.layer.close(index);
                            });
                            return false;
                        }
                },
                error(error) {
                    window.location.href = "../../../common/html/man/manError500.html"
                }
            })
        });
    });

