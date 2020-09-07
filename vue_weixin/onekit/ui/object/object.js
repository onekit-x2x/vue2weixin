// onekit/ui/object/object.js
import TheKit, {fixurl} from "../../lib/TheKit"
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
      const weixin_width =this.properties.width?this.properties.width+"px":"auto";
      const weixin_height =this.properties.height?this.properties.height+"px":"auto";
      var weixin_data = this.properties.data;
      if(!weixin_data.indexOf("://")){
        const currentUrl = TheKit.currentUrl();
        weixin_data =  "/"+fixurl(currentUrl,weixin_data);
    }
      this.setData({weixin_width,weixin_height,weixin_data});
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
    object_load(e){
      const size = e.detail;
      var data2 = {};
      if(!this.properties.width && !this.properties.height){
        data2.weixin_width = size.width+"px";
        data2.weixin_height = size.height+"px";
      }else      if(!this.properties.width && this.properties.height){
        data2.weixin_width = size.width*this.properties.height/size.height+"px";
      }else   if(this.properties.width && !this.properties.height){
        data2.weixin_height = size.height*this.properties.width/size.width+"px";
        }
      this.setData(data2);
    }
  }
})
