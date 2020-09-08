import TheKit, { current } from "../../lib/TheKit"
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior,'wx://form-field'],
  
  options: {
    virtualHost: true
  },
  properties: {
    "vModel":String,
    type:{type:String,value:"text"},
    value:{type:String,value:""},
    accept:{type:String,value:""},
    disabled:{type:Boolean,value:false},
    placeholder:{type:String,value:""},
    maxlength:{type:Number,value:10},
    width:{type:Number,value:""},
    height:{type:Number,value:""},
    src:{type:String,value:''},
    checked:{type:Boolean,value:false},
    autofocus:{type:Boolean,value:false},
  },
  lifetimes:{
    attached(){
      const weixin_width =this.properties.width?this.properties.width+"px":"auto";
      const weixin_height =this.properties.height?this.properties.height+"px":"auto";
      var weixin_src = this.properties.src;
      if(this.data.width.indexOf("%")>=0){
        widthStyle=this.data.width
      }
      else{
        widthStyle=this.data.width+"px"
      }
      this.setData({widthStyle});
      var heightStyle;
      console.log(this.data.width)
      if(!weixin_src.indexOf("://")){
        const currentUrl = TheKit.currentUrl();
        weixin_src =  "/"+fixurl(currentUrl,weixin_src);
    }
      this.setData({weixin_width,weixin_height,weixin_src});
      if(this.properties.vModel){
        const value = TheKit.current().UC.data[this.properties.vModel];
        this.setData({value});
      }
    },
  
  },
  methods:{
    text_input(e){
      const detail = e.detail;
      if(this.properties.vModel){
        const data = {};
        data[this.properties.vModel] = detail.value;
        TheKit.current().UC.setData(data);
      }
    },
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
    },
    radio_tap(e){
      if(this.properties.checked){


      }
    },
  },

  
})
