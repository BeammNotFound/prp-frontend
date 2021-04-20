 document.write("<script src='config/myConfig.js'></script>")




document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='config/cookieUtil.js'></script>")


//上传图片


    function imgChange(fileDom){
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
            var bi_id = $(fileDom).parent().prevAll().attr("id");
            var img = document.getElementById(bi_id);
            //图片路径设置为读取的图片
            img.src = e.target.result;
            // console.log(img.src);

            //给后台传图片 
            $()
            // 拿到传的图片文件
            var formData = new FormData();
            
            formData.append("image",$(fileDom)[0].files[0]);
            formData.append("bi_id",bi_id);
            
            $.ajax({
                type:'POST',
                url: MyPathConfig("changeBasesImageByBiId"),
                data:formData,
                contentType:false,
                processData:false,//这个很有必要，不然不行
                dataType:"json",
                mimeType:"multipart/form-data",
                success:function(data){
                        if(200==data.code){
                            // 重新将图片存一下
                            layer.msg('图片更改成功!',{icon:1,time:1000});
                            
                        }else if(404 == data.code){
                            error404();
                        }
                        else{
                            // Feng.error("保存失败!"+data.message);
                            layer.msg('图片更改失败!',{icon:5,time:1000});
                        }
                },
                error(error) {
                    window.location.href = "../../../common/html/man/manError500.html"
                }
            });

        };
        reader.readAsDataURL(file);
    }



