// onekit/ui/track/track.js
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  /**
   * 组件的属性列表
   */
  properties: {
    default:{type:String,value:""},
    label:{type:String,value:""},
    src:{type:String,value:""},
    kind:{type:String,value:""},
    srclang:{type:String,value:""}

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
