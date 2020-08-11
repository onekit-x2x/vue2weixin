import TheKit, { current } from "../../lib/TheKit"
Component({
  options: {
    virtualHost: true
  },
  properties: {
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
