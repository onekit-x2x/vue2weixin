// onekit/ui/li/li.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 

  /**
   * 组件的属性列表
   */
  options: {
    virtualHost: true
  },
  properties: {
    value:{
      type:Number,
      value:""
    }
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
    li_tap(){
      const value = this.properties.value;
      this.triggerEvent('onekit_ol_tap', {value}, { bubbles: true, composed: true }) 
    }
  }
})
