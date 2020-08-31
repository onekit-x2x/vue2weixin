// onekit/ui/iframe/iframe.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  /**
   * 组件的属性列表
   */
  properties: {
    width:{type:String,value:""},
    height:{type:String,value:""},
    frameborder:{type:Number,value:""},
    longdesc:{type:String,value:""},
    marginheight:{type:String,value:""},
    marginwidth:{type:String,value:""},
    scrolling:{type:String,value:""},
    src:{type:String,value:""},
    name:{type:String,value:""},
    seamless:{type:String,value:""},
    srcdoc:{type:String,value:""}





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
