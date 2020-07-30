// onekit/ui/ol/ol.js
Component({
  options: {
    virtualHost: true
  },

  properties: {
    Class:{type:String,value:""},
    Style:{type:String,value:""},
    Id:{type:String,value:""},
    reversed:{type:Boolean,},
    start:{type:Number,value:1},
    type:{type:String,value:""},

  },
  lifetimes: {
    attached: function() {
      console.log(this.properties.start)
      // 在组件实例进入页面节点树时执行
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
