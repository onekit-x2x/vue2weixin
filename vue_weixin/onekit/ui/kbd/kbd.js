// onekit/ui/kbd/kbd.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 
  properties: {
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
    onmousemove:function(e){
      this.triggerEvent('touchmove',e.detail)
    },
    onclick:function(e){
      this.triggerEvent('bindtap',e.detail)
    },
    onmouseup:function(e){
      this.triggerEvent('touchend',e.detail)
    }
  }
})
