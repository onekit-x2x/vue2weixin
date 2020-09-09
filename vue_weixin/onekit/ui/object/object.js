import TheKit, {
  fixurl
} from "../../lib/TheKit"
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    width: {
      type: Number,
      value: ""
    },
    height: {
      type: Number,
      value: ""
    },
    type: {
      type: String,
      value: ""
    },
    name: {
      type: String,
      value: ""
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    muted: {
      type: Boolean,
      value: false,
    },
    preload: {
      type: Boolean,
      value: false,
    },
    data: {
      type: String,
      value: "",
    },
    loop: {
      type: Boolean,
      value: false,
    },
    autoplay: {
      type: Boolean,
      value: false,
    },
    controls: {
      type: Boolean,
      value: true,
    },
    duration: {
      type: Number,
      value: "",
    },
    muted: {
      type: Boolean,
      value: false,
    },
    poster: {
      type: String,
      value: "",
    },
  },

  lifetimes: {
    attached: function () {

      const pages = getCurrentPages();
      const currentUrl = pages[pages.length-1].route;
      // 在组件实例进入页面节点树时执行
      const weixin_width = this.properties.width ? this.properties.width + "px" : "auto";
      const weixin_height = this.properties.height ? this.properties.height + "px" : "auto";
      var weixin_src = this.properties.data;


      if (!weixin_src.indexOf("://")) {
        const currentUrl = TheKit.currentUrl();
        weixin_src = "/" + fixurl(currentUrl, weixin_src);
      }
      this.setData({
        weixin_width,
        weixin_height,
        weixin_src
      });
    },
    detached: function () {
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
    image_load(e) {
      const size = e.detail;
      var data2 = {};
      if (!this.properties.width && !this.properties.height) {
        data2.weixin_width = size.width + "px";
        data2.weixin_height = size.height + "px";
      } else if (!this.properties.width && this.properties.height) {
        data2.weixin_width = size.width * this.properties.height / size.height + "px";
      } else if (this.properties.width && !this.properties.height) {
        data2.weixin_height = size.height * this.properties.width / size.width + "px";
      }
      this.setData(data2);
    },
    audio_play(e) {
      // this.triggerEvent('play', e.detail)
      const name = e.detail.name;
      const newValue = e.detail.value;
      this.triggerEvent('change', {newValue}) 
      this.setData({autoplay:false,name});
    },
    audio_pause(e) {
      this.triggerEvent('pause', e.detail)
    },
    audio_ended(e) {
      this.triggerEvent('ended', e.detail)
    },
    audio_timeupdate(e) {
      this.triggerEvent('timeupdate', e.detail)
    },

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
  }
})