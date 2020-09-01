// onekit/ui/th/th.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  /**
   * 组件的属性列表
   */
  properties: {  align:{type:String,value:""},
  charoff:{type:String,value:""},
  colspan:{type:Number,value:""},
  rowspan:{type:Number,value:""},
  valign:{type:String,value:""},
  scope:{type:String,value:""}
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
