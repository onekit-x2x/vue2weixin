// onekit/ui/td/td.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    align:{type:String,value:""},
    charoff:{type:String,value:""},
    colspan:{type:Number,value:""},
    rowspan:{type:Number,value:""},
    valign:{type:String,value:""},
    scope:{type:String,value:""},
    bgcolor:{type:String,value:""},
    height:{type:Number,value:""},
    width:{type:Number,value:""}

  },
lifetimes:{
  attached: function () {
    var widthStyle;
    console.log(this.data.width)
    if(this.data.width.indexOf("%")>=0){
      widthStyle=this.data.width
    }
    else{
      widthStyle=this.data.width+"px"
    }
    this.setData({widthStyle});
    var heightStyle;
    console.log(this.data.width)
    if(this.data.width.indexOf("%")>=0){
      heightStyle=this.data.width
    }
    else{
      heightStyle=this.data.width+"px"
    }
    this.setData({heightStyle});
}},
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
