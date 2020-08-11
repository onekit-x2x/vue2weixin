import {fixurl} from "../../lib/TheKit"
Component({
  options: {
    virtualHost: true
  },
  properties: {
    Style:String,
    Class:String,
    width:Number,
    height:Number,
      src:{
          type: String,
          value: "",
      },
      autoplay:{
          type: Boolean,
          value: false,
      },
      controls:{
          type: Boolean,
          value: false,
      },
      duration:{
          type: Number,
          value: "",
      },
      loop:{
          type: Boolean,
          value: false,
      },
      muted:{
          type: Boolean,
          value: false,
      },
      poster:{
          type: String,
          value: "",
      },
  },
   methods: {
        video_loadedmetadata(e){
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
        //   console.log("video_loadedmetadata", e);
        //   this.triggerEvent('loadedmetadata',e.details)
          },
          video_play(e){
            console.log("video_play", e);
            this.triggerEvent('play',e.details)
            },
            video_ended(e){
            console.log("video_ended", e);
            this.triggerEvent('ended',e.details)
            },
        
},
lifetimes: {
    attached: function() {
      const pages = getCurrentPages();
      const currentUrl = pages[pages.length-1].route;
      const weixin_width =this.properties.width?this.properties.width+"px":"auto";
      const weixin_height =this.properties.height?this.properties.height+"px":"auto";
      const weixin_src = "/"+fixurl(currentUrl,this.properties.src);
      this.setData({weixin_width,weixin_height,weixin_src});
    },
    detached: function() {
     
    },
  },
 
});
