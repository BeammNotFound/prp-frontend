document.write("<script src='../../../../../common/js/configuration/myConfig.js'></script>")



document.write("<script src='static/js//formateDate.js'></script>")

document.write("<script src='../../../common/js/cookieUtil.js'></script>")


// 添加资讯上传图片

    
    function imgChange(fileDom){
        var bm_id = JSON.parse(getCookie("message")).bm_id;
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            // alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
            swal("error", "您的设备不支持图片预览功能，如需该功能请升级您的设备", "error");
        }

        //获取文件
        var file = fileDom.files[0];
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
            
            var img = document.getElementById("img");
            //图片路径设置为读取的图片
            img.src = e.target.result;
            // console.log(img.src);

            //给后台传图片 
            $()
            // 拿到传的图片文件
            var formData = new FormData();
            
            formData.append("image",$(fileDom)[0].files[0]);
            
            $.ajax({
                type:'POST',
                url: MyPathConfig("uploadImage"),
                data:formData,
                contentType:false,
                processData:false,//这个很有必要，不然不行
                dataType:"json",
                mimeType:"multipart/form-data",
                success:function(data){
                        if(200==data.code){
                            // 重新将图片存一下
                            // window.location.reload();
                            $("img").attr("src", data.data);
                            layer.msg('图片上传成功!',{icon:1,time:1000});
                        }else if(404 == data.code){
                            error404();
                        }
                        else{
                            layer.msg('data.message!',{icon:5,time:1000});
                        }
                },
                error(error) {
                    window.location.href = "../../../common/html/man/manError500.html"
                }
            });

        };
        reader.readAsDataURL(file);
    }



