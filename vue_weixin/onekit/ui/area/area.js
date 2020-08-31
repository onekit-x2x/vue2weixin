// onekit/ui/area/area.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    alt:{type:String,value:""},
    coords:{type:String,value:""},
    href:{type:String,value:""},
    nohref:{type:String,value:""},
    shape:{type:String,value:""},
    target:{type:String,value:""},
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
