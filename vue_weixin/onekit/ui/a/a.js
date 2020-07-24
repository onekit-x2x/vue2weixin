// onekit/ui/a/a.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },

  properties: {
    Style:String,
    Class:String,
    href:{type:String,value:""}

  },

  lifetimes: {
    attached: function() {
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
    a_tap:function (e) {
      var that = this;
      var href=that.properties.href
      console.log(href)
      wx.navigateTo({
        url:href,
      })
    }

  },
  
})
