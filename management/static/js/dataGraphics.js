// 数据图形

       // 最新一周志愿者申请和领养申请量
       var myChart = echarts.init(document.getElementById('main1'));
        var option = {
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            grid: {
                top: '5%',
                right: '2%',
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'申请志愿者',
                    type:'line',
                    areaStyle: {normal: {}},
                    data:[2, 3, 4, 5, 4, 5, 3],
                    smooth: true
                },
                {
                    name:'申请领养',
                    type:'line',
                    areaStyle: {normal: {}},
                    data:[4, 2, 1, 2, 2, 3, 2],
                    smooth: true,

                }
            ]
        };
        myChart.setOption(option);


        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main2'));
        // 最新一周被领养动物数量
        // 指定图表的配置项和数据
        var option = {
            grid: {
                top: '5%',
                right: '1%',
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'被领养数量',
                data: [15, 23, 28,39, 21, 21,23,30,25,19,25,23],
                type: 'line',
                smooth: true
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        // 最新一周访问量
        var myChart = echarts.init(document.getElementById('main3'));
        var option = {
            grid: {
                top: '5%',
                right: '1%',
                left: '1%',
                bottom: '10%',
                containLabel: true
            },
            tooltip: {
                // 触发轴
                trigger: 'axis'
            },
            
            xAxis: {
                type: 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:'访问量',
                data: [20, 24, 28, 39, 40, 34,33],
                type: 'bar',
                smooth: true,
                itemStyle: {   
                    //通常情况下：
                    normal:{  
    　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                        color: function (params){
                            var colorList = ['rgb(164,205,238)','rgb(42,170,227)','rgb(25,46,94)','rgb(195,229,235)','rgb(25,46,94)','rgb(42,170,227)','rgb(164,205,238)'];
                            return colorList[params.dataIndex];
                        }
                    },
                    //鼠标悬停时：
                    emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
    
            }]
        };
        myChart.setOption(option);
        
        // 用户来源
        var myChart = echarts.init(document.getElementById('main4'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['18岁以下','18-30岁','30-45岁','45-60岁','60岁以上']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:120, name:'18岁以下'},
                        {value:450, name:'18-30岁'},
                        {value:234, name:'30-45岁'},
                        {value:135, name:'45-60岁'},
                        {value:100, name:'60岁以上'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);