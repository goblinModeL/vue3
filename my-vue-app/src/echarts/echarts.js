
export const option1 = {
    tooltip: {
        trigger: 'item'
    },
    title: {

        text: '年龄分段',
        subtext: '',
        left: 'center'
    },
    series: [
        {
            // name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 20,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 14.2, name: '35 至 44' },
                { value: 16.2, name: '45 至 54' },
                { value: 13.2, name: '55 至 64' },
                { value: 12.8, name: '65岁及以上' },
                { value: 43.6, name: '34岁及以下' }
            ]
        }
    ]
}

export  const  option2 = {
    title: {
        text: '65岁以上老年人常见疾病',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },

    series: [
        {
            type: 'pie',
            radius: '50%',
            data: [
                { value: 70, name: '高血压' },
                { value: 40, name: '冠心病' },
                { value: 10, name: '心力衰竭' },
                { value: 25, name: '糖尿病' },
                { value: 10, name: '阿尔兹海默' }
            ],
            label: {
                show: false,
                position: 'center'
            },
        }

    ]
};
export  const option3 = {
    grid:{
        containLabel:'true'
    },
    tooltip: {
        trigger: 'item'
    },
    title: {
        text: '60岁以上人口数',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: ['2017','2018', '2019', '2020', '2021', ]
    },
    yAxis: {
        type: 'value',
     name:'万人'
    },
    series: [
        {
            data: [24222,25087, 25570, 26402, 26736],
            type: 'bar',
            barWidth: '35%',
        }
    ]
};