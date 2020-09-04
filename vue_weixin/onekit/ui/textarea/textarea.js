import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
 
  properties: {
    onekitClass:{type:String,value:""},
    onekitStyle:{type:String,value:""},
    onekitId:{type:String,value:""},
    placeholder:{type:String,value:""},
    maxlength :{type:Number,value:"140"},
    
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
