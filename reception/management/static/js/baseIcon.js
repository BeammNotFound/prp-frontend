 document.write("<script src='static/js/config/cookieUtil.js'></script>")




document.write("<script src='static/js/formateDate.js'></script>")

document.write("<script src='static/js/config/cookieUtil.js'></script>")


//上传头像


    function imgPreview(fileDom){
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
            swal("error", "您的设备不支持图片预览功能，如需该功能请升级您的设备", "error");
        }

        //获取文件
        var file = fileDom.files[0];
        console.log(file);
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            // alert("请选择图片！");
            swal("error", "请选择图片！", "error");
            return;
        }
        //读取完成
        reader.onload = function(e) {
            //获取图片dom
            var img = document.getElementById("b_icon");
            // console.log("img");
            //图片路径设置为读取的图片
            img.src = e.target.result;
            // console.log(img.src);

            //给后台传图片 
            $()
            // 拿到传的图片文件
            var formData = new FormData();
            formData.append("base_icon",$('#iconInput')[0].files[0])
            
            formData.append("base_id",JSON.parse(getCookie("base_id")));

            $.ajax({
                type:'POST',
                url: MyPathConfig("changeBasesIconByBaseId"),
                data:formData,
                contentType:false,
                processData:false,//这个很有必要，不然不行
                dataType:"json",
                mimeType:"multipart/form-data",
                success:function(data){
                        if(200==data.code){
                            // 重新将图片存一下
                            
                            var base_info = JSON.parse(getCookie("base_info"))
                            base_info.b_icon = data.data;
                            setCookie("base_info",JSON.stringify(base_info))
                            // window.location.reload();
                            layer.msg('头像更改成功!',{icon:1,time:1000});
                            
                        }else if(404 == data.code){
                            error404();
                        }else{
                            // Feng.error("保存失败!"+data.message);
                            layer.msg(data.message,{icon:5,time:1000});
                            
                        }
                    },
                    error(error) {
                        window.location.href = "../man/manError500.html"
                    }
            });

        };
        reader.readAsDataURL(file);
    }



