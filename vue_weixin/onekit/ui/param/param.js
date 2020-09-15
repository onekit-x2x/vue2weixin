// onekit/ui/param/param.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    name: {
      type: String,
      value: ""
    },
    value:{
      type: Number|Boolean,
      value: null|false
    }

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      console.log(this.properties.name)
      console.log(this.properties.value)

      this.setData({
        name: this.properties.name,
        value:this.properties.value,
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
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