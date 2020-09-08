// onekit/ui/meter/meter.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: { 
    value:{type:Number,value:""},
    max:{type:Number,value:1},
    min:{type:Number,value:0},
    high:{type:Number,value:""},
    low:{type:Number,value:""},
    form:{type:String,value:""},
    percent:{type:Number,value:""}

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      if (this.properties.max!=1) {
        this.properties.percent=(this.properties.value-this.properties.min)/(this.properties.max-this.properties.min)*100;
        console.log(this.properties.percent)
        this.setData({
        percent: this.properties.percent
      })
      }
      else{
        this.properties.percent=(this.properties.value-this.properties.low)/(this.properties.high-this.properties.low)*100;
        console.log(this.properties.percent)
        this.setData({
        percent: this.properties.percent
      })
      }
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
