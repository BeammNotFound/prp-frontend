$(function (){
    function $(id)
		{
		  return typeof id==='string'?document.getElementById(id):id;
		}
		window.onload=function(){
			//获取鼠标滑过或点击的标签和要切换内容的元素
			var titles=$('change-nav').getElementsByTagName('li');
			var content=$('change-content').getElementsByClassName('mod');

			if(titles.length!=content.length)
			return;
		    
		    //遍历titles下的所有li
		    for(var i=0; i<titles.length; i++){
		    	titles[i].id=i;
		    	titles[i].onclick=function()
		    	{
		    		//清除所有li上的class
		    		for(var j=0; j<titles.length; j++)
		    		{
		    			titles[j].className='';
		    			content[j].style.display='none';
		    		}
		    		//设置当前为高亮显示
		    		this.className='change-color';
		    		content[this.id].style.display='block';
		    	}
            }
            
            Date.prototype.toDateInputValue = (function() {
                var local = new Date(this);
                local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
                return local.toJSON().slice(0,10);
            });

            // document.getElementById("mydate").value=new Date().toDateInputValue();

            // var date = document.getElementById('mydate');
            // date.onblur = function(){
            //     var birthday = document.getElementById("mydate").value;

            //     var date = new Date();
            //     var startDate = new Date(birthday);
            //     var newDate = date.getTime() - startDate.getTime();
            //     var age = Math.ceil((newDate / 1000 / 60 / 60 / 24 /365)-1);
            //     if (isNaN(age)){
            //         age = "";
            //     }
            //     var perage = document.getElementById('perage');
            //     perage.innerText = age;
            // }

            }

})