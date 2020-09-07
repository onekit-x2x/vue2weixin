// onekit/ui/menuitem/menuitem.js
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
   
    checked:{type:Boolean,value:""},
    default:{type:Boolean,value:""},
    disabled:{type:Boolean,value:""},
    command:{type:String,value:""},
    icon:{type:String,value:""},
    label:{type:String,value:""},
    radiogroup:{type:String,value:""},
    type:{type:String,value:""},

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
