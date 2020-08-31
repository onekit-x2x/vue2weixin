// onekit/ui/canvas/canvas.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },

  /**
   * 组件的属性列表
   */
  properties: {
    height:{
      type:Number,
      value:150
    },
    width:{
      type:Number,
      value:300
    },
    id:{
      type:String,
      value:""
    },

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
