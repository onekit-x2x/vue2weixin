// onekit/ui/object/object.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 
  options: {
    virtualHost: true
  },
  properties: {
    width:{type:Number,value:""},
    height:{type:Number,value:""},
    type:{type:String,value:""},
    data:{type:String,value:""},
    name:{type:String,value:""}
  },

  lifetimes: {
    attached: function() {
      console.log(this.properties.width);
      console.log(this.properties.height);
      console.log(this.properties.data);
      // 在组件实例进入页面节点树时执行
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
