// onekit/ui/ol/ol.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
  options: {
    virtualHost: true,
  },
  options: {
    virtualHost: true
  },
  properties: {
   
    reversed:{type:Boolean,value:false},
    start:{type:Number,value:1},
    type:{type:String,value:""},

  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      this.properties.start==this.properties.start--;
      console.log(this.properties.start)
      this.setData({
        start: this.properties.start--
      })
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },


  data: {

  },

  methods: {

  }
})
