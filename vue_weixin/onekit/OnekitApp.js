import Vue from "../onekit/vue"
import TheKit from './lib/TheKit';

 export default function(options){
  const weixin_options = {
    data:{
    },
    lifetimes:{
      created:function() {
        if(this.created){
          this.created();
        }
      },
      attached: function() {
      },
      detached: function() {
      },
    },
    properties:{},
    methods:{

    }
  };
  for(const key of Object.keys(options)){
    const value = options[key];
    switch(key){
      case "created":
        break;
      case "props":
        for(const p of Object.keys(value)){
          const v = value[p];
          weixin_options.properties[p] = v;
        }
        break;
      default:
        if(typeof(value)=="function"){
          weixin_options.methods[key] = value;
        }else{
          weixin_options[key] = value;
        }
        break;
    }
  }
  Component(weixin_options);
}