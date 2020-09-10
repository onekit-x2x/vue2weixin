// onekit/ui/ul/ul.js
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
    type:{type:String,value:"disc"}

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  lifetimes:{
    attached: function () {
      var typeStyle;
      console.log(this.properties.type)
      typeStyle=this.properties.type
      this.setData({typeStyle});
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
