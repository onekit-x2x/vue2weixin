// onekit/ui/button/button.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
   
  options: {
    virtualHost: true
  },
  properties: {
      autofocus:{type:Boolean,},
      disabled:{type:Boolean,},
      form:{type:String,value:"",},
      formaction:{type:String,value:"",},
      formenctype:{type:String, value:"",},
      formmethod:{type:String,value:"",},
      formnovalidate:{type:String,value:"",},
      formtarget:{type:String,value:"",},
      name:{type:String,value:"",},
      type:{type:String,value:"",},
      value:{type:String,value:"",},
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {}
})