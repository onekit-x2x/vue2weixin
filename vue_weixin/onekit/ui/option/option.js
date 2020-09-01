// onekit/ui/option/option.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  /**
   * 组件的属性列表
   */
  properties: {label:{type:String,value:"text"},
  disable:{type:Boolean,value:""},
  selected:{type:String,value:""},
  value:{type:String,value:""}



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
