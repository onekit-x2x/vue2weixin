// onekit/ui/menuitem/menuitem.js
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
   
    checked:{type:Boolean},
    default:{type:Boolean},
    disabled:{type:Boolean},
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
