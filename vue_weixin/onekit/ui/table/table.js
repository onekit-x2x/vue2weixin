// onekit/ui/table/table.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 
  options: {
    virtualHost: true
  },
  properties: {
    border:{type:String|Number,value:1},
    cellpadding:{type:String|Number,value:2},
    cellspacing:{type:String|Number,value:1},
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
