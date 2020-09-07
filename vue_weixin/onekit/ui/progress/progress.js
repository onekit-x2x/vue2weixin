import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    value: {
      type: Number,
      Number: 0
    },
    max: {
      type: Number,
      Number: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
