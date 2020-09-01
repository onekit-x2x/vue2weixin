// onekit/ui/meter/meter.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: { 
    value:{type:Number,value:""},
    max:{type:Number,value:""},
    min:{type:Number,value:""},
    high:{type:Number,value:""},
    low:{type:Number,value:""},
    form:{type:String,value:""}



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

  }
})
