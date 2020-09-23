// onekit/ui/img/img.js
import TheKit, {fixurl} from "../../lib/TheKit"
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    width:{type:Number|String,valxue:""},
    height:{type:Number|String,value:""},
    src:{
      type:String,
      value:''
    },
    srcset:{
      type:String,
      value:''
    },
    sizes:{
      type:String,
      value:''
    }

    
  },



  /**
   * 组件的方法列表
   */
  methods: {
    image_load(e){
      const that = this;
      const size = e.detail;
      const query = wx.createSelectorQuery().in(that);
query.select('.onekit-img').boundingClientRect();
query.exec(function(res){
var WIDTH = res[0].width;
var HEIGHT = res[0].height;
  
  var data2 = {};
  if(!that.properties.width && !that.properties.height){

    data2.weixin_width = size.width+"px";
    data2.weixin_height = size.height+"px";
  }else      if(!that.properties.width && that.properties.height){
    // console.log(WIDTH,HEIGHT,size)
   // data2.weixin_width = size.width*this.properties.height/size.height+"px";
    data2.weixin_width = size.width*HEIGHT/size.height+"px";
  }else   if(that.properties.width && !that.properties.height){
   // data2.weixin_height = size.height*this.properties.width/size.width+"px";
    data2.weixin_height = size.height*WIDTH/size.width+"px";
    }
    that.setData(data2);
});
     

    }
  },
  lifetimes: {
    attached: function() {

      
      
      var weixin_width =this.properties.width?(this.properties.width.indexOf("%")?this.properties.width:(this.properties.width+"px")):"auto";
      const weixin_height =this.properties.height?(this.properties.height.indexOf("%")?this.properties.height:(this.properties.height+"px")):"auto";

      var weixin_src = this.properties.src; 

      var systemInfo = wx.getSystemInfoSync();
      console.log(systemInfo)
    ///////////////////////////////////////////////

    function split(string, str) {
      const result = [];
      var quoHaoDepth = 0;
      var begin = 0;
      var space = 0;
      var i = 0;

      while (i < string.length) {
          var char = string[i];   
          if (char == "(") {
              quoHaoDepth++;
              i++;
              continue;
          } else if (char == ")") {
              quoHaoDepth--;
              i++;
              continue;
          }
          if(quoHaoDepth==0){
          if(string.indexOf(str,space)==i){
            result.push(string.substring(begin,i));
            space = i = begin=i+str.length;
continue;
          }
          }
          i++;
          space++;
      }
      result.push(string.substring(begin))
      return result;
  }
  function media2jsons(mediaString){
    const jsons = [];
    var medias = mediaString.split("and")
    for(const media of medias){
      const array = media.replace("(","").replace(")","").trim().split(":");
      jsons.push([array[0].trim(),array[1].trim()]);
    }
    return jsons;
  }
function fix(value){
  const units = ["px","sp","%"];
  for(const unit of units){
    if(value.endsWith(unit)){
      return parseFloat(value.substr(0,vaalue.length-unit.length));
    }
  }
  return value;
}
    function checkMedia(jsons)
    {
      for(const json of jsons){
        const type = json[0];
     const value = json[1];
     switch(type){

  case "aspect-ratio":
    break;
  case "max-width":
    if(systemInfo.windowWidth<=fix(value)){
      return true;
    }
    break;
  case "min-width":
    if(systemInfo.windowWidth>=fix(value)){
      return true;
    }
      break;
  case "max-height":
    if(systemInfo.windowHeight<=fix(value)){
      return true;
    }
    break;
  case "min-height":
    if(systemInfo.windowHeight>=fix(value)){
      return true;
    }
    break;
  case "color":
    break;
  case "device-aspect-ratio":
      break;
  case "device-height":
    break;
  case "device-width":
    break;
  case "grid":
    break;
  case "color":
    break; 
  case "height":
    if(systemInfo.screenHeight<=fix(value)){
      return true;
    }
    break; 
  case "max-aspect-ratio":
    break; 
  case "max-color":
    break; 
  case "max-color-index":
    break; 
  case "max-device-aspect-ratio":
    break; 
  case "max-device-height":
    break; 
   case "max-device-width":
    break; 
  case "max-monochrome":
    break; 
  case "max-resolution":
    break; 
  case "min-aspect-ratio":
    break; 
  case "min-color":
    break; 
  case "min-color-index":
    break; 
  case "min-device-aspect-ratio":
    break; 
  case "min-device-width":
    break; 
  case "min-device-heigh":
    break; 
  case "min-monochrome":
    break; 
  case "min-resolution":
    break; 
  case "monochrome":
    break; 
  case "orientation":
    break; 
  case "resolution":
    break; 
  case "scan":
    break; 
  case "width":
   if(systemInfo.screenWidth<=fix(value)){
     return true;
   }


    break; 
    
default:
  throw new Error(type);
     }
      }
      return false;
    }

    const vue_sizes=this.properties.sizes;
    const media_sizes = split(vue_sizes,",");
   
    var i=0;
    for(const media_size of media_sizes){
      if(i<media_sizes.length-1){
        const array = split(media_size.trim()," ");
        const media = array[0].trim();
        const size = array[1].trim();
       
        const jsons = media2jsons(media);
        if(checkMedia(jsons)){
          weixin_width = size;
          break;
        }
      }else{
        weixin_width = size;
      }
    }
    

    ////////////////////////////////////////////////


      // console.log(windowWidth)
      const vue_srcset=this.properties.srcset;
      const srcset = vue_srcset.split(",");
    const X = 2;
      for(const src of srcset)
      {
        const array = src.trim().split(" ");
        const url = array[0];
        const rule = array[1];
        if(rule.endsWith("w")){
          const w = parseFloat(rule.substr(0,rule.length-1))
          if(w>=systemInfo.windowWidth)
          {
            weixin_src = url;
          }
        }else        if(rule.endsWith("x")){
          const x = parseFloat(rule.substr(0,rule.length-1))
          if(x>=X)
          {
            weixin_src = url;
          }
        }else{
          throw new Error(rule)
        }
      }
      
     
      if(weixin_src.indexOf("://")<0){
        const currentUrl = TheKit.currentUrl();
        weixin_src =  "/"+fixurl(currentUrl,weixin_src);
    }
      this.setData({weixin_width,weixin_height,weixin_src});
    },
    detached: function() {
     
    },
  },
})
