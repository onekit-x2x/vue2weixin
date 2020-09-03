// onekit/ui/img/img.js
import TheKit, {fixurl} from "../../lib/TheKit"
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    width:{type:Number,value:""},
    height:{type:Number,value:""},
    src:{
      type:String,
      value:''
    },
    alt:{type:String,value:""},
    usemap:{type:String,value:""}
    
  },



  /**
   * 组件的方法列表
   */
  methods: {
    image_load(e){
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
  },
  lifetimes: {
    attached: function() {
      const weixin_width =this.properties.width?this.properties.width+"px":"auto";
      const weixin_height =this.properties.height?this.properties.height+"px":"auto";
      var weixin_src = this.properties.src;
      if(!weixin_src.indexOf("://")){
        const currentUrl = TheKit.currentUrl();
        weixin_src =  "/"+fixurl(currentUrl,weixin_src);
    }
      this.setData({weixin_width,weixin_height,weixin_src});
    },
    detached: function() {
     
    },
  },
})
