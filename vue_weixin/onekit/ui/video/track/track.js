const vttToJson = require("./vtt-to-json")
// components/track/track.js
var zimuList = []; // 字幕集合
var currentZimuIndex = -1;  // 当前字幕位置，-1表示还未开始

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        vtt :{type:Array,value:[]}
    },

    /**
     * 组件的初始数据
     */
    data: {
        enableEn: true,
        enableZh: true
    },
    /**
     * 组件的方法列表
     */
    methods: {
        vtt(vtt){
            zimuList = vtt;
            console.log("vtt",zimuList)
        },
        // 视频触发事件
        videoChangeEvent: function (time) {
            this.setZimu(time, currentZimuIndex)
        },
        
        // 设置字幕（展示字幕的重要环节）
        setZimu: function(time, index) {
            if (index >= zimuList.length) {
                return;
            }
            // 如果需要移动字幕指针（即当前指向-1 或 当前视频进度大于当前字幕结尾的时间）
            if (index == -1 || zimuList[index][2] < time) {
                this.hideZimu();
                this.setZimu(time, index + 1)
                return;
            }
            else if (index != 0 && index != -1 && zimuList[index][1] > time && zimuList[index - 1][2] > time) {
                this.hideZimu();
                this.setZimu(time, (index - 1 < -1) ? -1 : (index - 1))
                return;
            }
            // 如果未来指针大于当前指针并且当前视频进度 > 未来指针字幕的开始时间(-200ms)
            if (index != currentZimuIndex && time > zimuList[index][1] - 250) {
                currentZimuIndex = index;
                this.showZimu(currentZimuIndex);
            }
        },
        // 改变字幕
        changeZimu: function (zh, en) {
            console.log(zh,en)
            this.setData({
                zh,
                en
            })
        },
        // 隐藏字幕
        hideZimu: function () {
            this.changeZimu('', '');
        },
        // 展示字幕
        showZimu: function (index) {
            this.changeZimu(zimuList[index][4], zimuList[index][3]);
        },
    }
})
