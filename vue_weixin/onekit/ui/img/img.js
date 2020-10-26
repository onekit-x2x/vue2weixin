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
      // console.log(systemInfo)
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
    var medias = mediaString.split("and");
    for(const media of medias){
      const array = media.replace("(","").replace(")","").trim().split(":");
      jsons.push([array[0].trim(),array[1].trim()]);
    }
    return jsons;
  }



function fix(value){
 const units = ["px","sp","%","rm","rem"];
  for(const unit of units){
    if(value.endsWith(unit)){
      switch(unit){
        case "px":
          return parseFloat(value.substr(0,value.length-unit.length));
        case "sp":
            break;
        case "%":
              break;     
              default :
              throw new Error(value) ;
      }  
    }else{
      return value;
    }
  }
}




    function checkMedia(jsons)
    {
      for(const json of jsons){
        const type = json[0];
     const value = json[1];
     switch(type){

  case "aspect-ratio":   //定义输出设备中的页面可见区域宽度与高度的比率
    if((systemInfo.windowWidth/systemInfo.windowHeight)==fix(value)){
      return true;
    }
    break;
  case "device-aspect-ratio":  //定义输出设备的屏幕可见宽度与高度的比率
    if((systemInfo.screenWidth/systemInfo.screenHeight)==fix(value)){
      return true;
    }
      break;
  case "width":   //定义输出设备中的页面可见区域宽度。
   if(systemInfo.windowWidth==fix(value)){
     return true;
   }
    break; 
  case "device-width":   //定义输出设备的屏幕可见宽度
    if(systemInfo.screenWidth==fix(value)){
      return true;
    }
    break;
  case "max-width":
    if(systemInfo.windowWidth<=fix(value)){
      return true;
    }
    break;
  case "min-width":   //定义输出设备中的页面最大可见区域宽度
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
  case "color"://
    break;
  case "device-height":
    if(systemInfo.screenHeight==fix(value)){
      return true;
    }
    break;
  case "grid"://
    break;
  case "color"://
    break; 
  case "height":
    if(systemInfo.windowHeight<=fix(value)){
      return true;
    }
    break; 
  case "max-aspect-ratio":
    if(("systemInfo.windowWidth/systemInfo.windowHeight")<=fix(value)){
      return true;
    }
    break; 
  case "max-color"://
    break; 
  case "max-color-index"://
    break; 
  case "max-device-aspect-ratio":
    if((systemInfo.screenWidth/systemInfo.screenHeight)<=fix(value)){
      return true;
    }
    break; 
  case "max-device-height":
    if(systemInfo.screenHeight<=fix(value)){
      return true;
    }
    break; 
   case "max-device-width":
    if(systemInfo.screenWidth<=fix(value)){
      return true;
    }
    break; 
  case "max-monochrome"://
    break; 
  case "max-resolution":
    if((systemInfo.screenWidth*systemInfo.screenHeight)<=fix(value)){
      return true;
    }
    break; 
  case "min-aspect-ratio":
    if((systemInfo.windowWidth/systemInfo.windowHeight)>=fix(value)){
      return true;
    }
    break; 
  case "min-color"://
    break; 
  case "min-color-index"://
    break; 
  case "min-device-aspect-ratio":
    if((systemInfo.screenWidth/systemInfo.screenHeight)>=fix(value)){
      return true;
    }
    break; 
  case "min-device-width":
    if(systemInfo.screenWidth>=fix(value)){
      return true;
    }
    break; 
  case "min-device-heigh":
    if(systemInfo.screenHeight>=fix(value)){
      return true;
    }
    break; 
  case "min-monochrome":
    break; 
  case "min-resolution":
    if((systemInfo.screenWidth*systemInfo.screenHeight)>=fix(value)){
      return true;
    }
    break; 
  case "monochrome":  //定义在一个单色框架缓冲区中每像素包含的单色原件个数
    break; 
  case "orientation":  //定义输出设备中的页面可见区域高度是否大于或等于宽度。
   switch(value)
   {
     case "landscape": 
      if((systemInfo.windowHeight<=systemInfo.windowWidth)){
        return true;
    }
     break;
     case "portrait": 
     if((systemInfo.windowHeight>=systemInfo.windowWidth)){
       return true;
   }
    break;
    default:
    throw new Error(value);
   }

    // if((systemInfo.windowHeight<systemInfo.windowWidth)==fix(value)){
      
    // }
    break; 
  case "resolution":  //定义设备的分辨率
    if((systemInfo.screenWidth*systemInfo.screenHeight)==fix(value)){
      return true;
    }
    break; 
  case "scan"://
    break;  
  default:
  throw new Error(type);
     }
      }
      return false;
    }



    const vue_sizes=this.properties.sizes;
    const media_sizes = split(vue_sizes,",");
    
   // console.log(media_sizes);       "(max-width: 200px) 100px", "400px"
   

    function f1(m_s){
        const array = split(m_s.trim()," ");  
        const media = array[0].trim();
        const size = array[1].trim();
       
        const jsons = media2jsons(media);
        if(checkMedia(jsons)){
          weixin_width = size;
          return true;
        }else{
          return false;
        }
    }



      if(media_sizes.length==1){
        const media_size = media_sizes[0];
        if(media_size.indexOf("(")>=0){
          f1(media_size);
          console.log(media_size);
        }else{
          weixin_width = media_size;
          // console.log(media_size);
        }
      }else{
        var i=0;
        for(const media_size of media_sizes){
        if(i<media_sizes.length-1){

          if(f1(media_size)){
            break;
          }
        }
        else{
          weixin_width = media_size;
        }
        i++;
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
        console.log(rule+"---"+url)
        if(rule.endsWith("w")){
          const w = parseFloat(rule.substr(0,rule.length-1))
          if(w<=systemInfo.windowWidth)
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
      //////////////////////////
     
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
