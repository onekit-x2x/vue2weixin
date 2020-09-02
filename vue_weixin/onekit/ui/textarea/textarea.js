// onekit/ui/textarea/textarea.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {maxlength:{type:Number,value:""},
  name:{type:String,value:""},
  disable:{type:Boolean,value:""},
  form:{type:String,value:""},
  placeholder:{type:String,value:"text"},
  readonly:{type:String,value:""},
  required:{type:String,value:""},
  rows:{type:Number,value:""},
  wrap:{type:String,value:""},
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
