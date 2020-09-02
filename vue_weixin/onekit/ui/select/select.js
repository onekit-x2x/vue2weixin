// onekit/ui/select/select.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {disabled:{type:Boolean,value:""},
  form:{type:String,value:""},
  multiple:{type:String,value:""},
  name:{type:String,value:""},
  required:{type:String,value:""},
  size:{type:Number,value:""}

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
