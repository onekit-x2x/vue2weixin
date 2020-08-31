import TheKit, { current } from "../../lib/TheKit"
import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {onekitId:String,
    "vModel":String,
    type:{type:String,value:"text"}
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
