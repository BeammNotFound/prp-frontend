// 基地详情中宠物详情中的轮播图
function carousel(){
    var items = document.getElementsByClassName('item');//图片
    var points = document.getElementsByClassName('point');//点
    var goPreBtn = document.getElementById('goPre');//左按钮
    var goNextBtn = document.getElementById('goNext');//右按钮
    var time=0;
    var wrap = document.getElementById("wrap");

    //1.表示第几张图片的展示
    var index = 0 ;//index表示第几张图片在展示---第index张图片有active这个类名

    //执行到下一个图片的时候，使上一个图片的active清除掉
    var clearActive = function(){
        for(var i = 0; i < items.length ; i++)
        {
            items[i].className = 'item';
        }
        for(var i = 0; i < points.length ; i++)
        {
            points[i].className = 'point';
        }
    }


    //goIndex实现active类名的跳转
    var goIndex = function(){
        clearActive();//从0开始，把active都给去掉，只给我想添加的填上active
        points[index].className = 'point active';
        items[index].className = 'item active';
    }
    //2.下一张图片的函数
    var goNext = function(){
        if(index < 3)//index=5的时候没有定义，所以加一个条件，到超过5再重新回到第五个
        {
            index ++;
        }
        else
        {
            index = 0;
        }
        goIndex();
    }
    //3.上一张图片的函数
    var goPre = function(){
        if(index == 0){//到第一张的时候，再往前等于第四张
            index = 3;
        }else{
            index --;
        }
        goIndex();
    }

    //4.点击按钮事件
    //点击右按钮的效果
    goNextBtn.addEventListener('click',function(){
        goNext();
    });
    //点击右按钮的效果（同上）
    // goNextBtn.onclick=function(){
    //     goNext();
    // };

    //点击左按钮的效果
    goPreBtn.addEventListener('click',function(){
        goPre();
    });

    //小圆点点击当前图片的实现方法
    for(var i = 0; i < points.length; i++)
    {
        points[i].addEventListener('click',function(){
            var pointIndex = this.getAttribute('data-index');//getAttribute用来获取标签属性
            index = pointIndex;
            goIndex();
            time = 0;
        })
    }

    var timer = null;
    function play(){
        timer=setInterval(function(){
            time++;
            if(time == 20)
            {
                goNext();
                time = 0;
            }
        },200)
    }
    play();
    function stop(){
        clearInterval(timer);
    }
    wrap.onmouseover=function(){
        stop();
    }
    wrap.onmouseout=function(){
        play();
    }
}
