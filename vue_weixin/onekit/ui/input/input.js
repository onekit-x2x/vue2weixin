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
    accept:{type:String,value:""},
    disabled:{type:Boolean,value:""},
    placeholder:{type:String,value:""},
    maxlength:{type:String},
  },
  lifetimes:{
    attached(){
      if(this.properties.vModel){
        const value = TheKit.current().UC.data[this.properties.vModel];
        this.setData({value});
      }
    }
  },
  methods:{
    text_input(e){
      const detail = e.detail;
      if(this.properties.vModel){
        const data = {};
        data[this.properties.vModel] = detail.value;
        TheKit.current().UC.setData(data);
      }
    }
  }
})
