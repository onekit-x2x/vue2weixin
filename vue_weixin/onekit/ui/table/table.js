// onekit/ui/table/table.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    border:{type:String,value:""},
    cellpadding:{type:String,value:""},
    cellspacing:{type:String,value:""},
    frame:{type:String,value:""},
    rules:{type:String,value:""},
    width:{type:String,value:""},
    border:{type:String,value:""}


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
