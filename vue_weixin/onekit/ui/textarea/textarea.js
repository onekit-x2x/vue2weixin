import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  /**
   * 组件的属性列表
   */
  behaviors: ['wx://form-field'],
 
  options: {
    virtualHost: true
  },
  properties: {
    disabled:{type:Boolean,value:false},
    autoFocus:{type:String,value:""},
    placeholder:{type:String,value:""},
    maxlength :{type:Number,value:"140"},
    autocomplete:{type:String,value:""},
    cols:{type:Number,value:20},
    form:{type:String,value:""},
    minlength:{type:Number,value:1},
    name:{type:String,value:""},
    readonly:{type:Boolean,value:false},
    required:{type:Boolean,},
    rows:{type:Number,value:2},
    spellcheck:{type:Boolean,value:false},
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
