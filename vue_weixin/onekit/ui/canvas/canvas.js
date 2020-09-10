// onekit/ui/canvas/canvas.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 

  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
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
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      var ctx = wx.createCanvasContext('canvas', this);
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
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
