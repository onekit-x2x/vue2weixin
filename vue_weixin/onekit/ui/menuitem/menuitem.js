// onekit/ui/menuitem/menuitem.js
Component({
  options: {
    virtualHost: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
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
