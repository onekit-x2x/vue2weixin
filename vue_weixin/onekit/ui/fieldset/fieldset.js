// onekit/ui/fieldset/fieldset.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    disabled:{type:Boolean,value:false},
    form:{type:String,value:""},
    name:{type:String,value:""},
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
