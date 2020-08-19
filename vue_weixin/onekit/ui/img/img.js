// onekit/ui/img/img.js
import TheKit, {fixurl} from "../../lib/TheKit"
Component({

  properties: {
    OnekitStyle:String,
    OnekitClass:String,
    width:Number,
    height:Number,
    src:{
      type:String,
      value:''
    },
    
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
      const currentUrl = TheKit.currentUrl();
      const weixin_src = "/"+fixurl(currentUrl,this.properties.src);
      this.setData({weixin_width,weixin_height,weixin_src});
    },
    detached: function() {
     
    },
  },
})
