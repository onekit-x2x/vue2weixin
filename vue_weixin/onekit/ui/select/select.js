import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],

  options: {
    virtualHost: true
  },
  properties: {
    text:{type:String,value:""},
    autocomplete:{type:String,value:""},
    autofocus:{type:Boolean,value:true},
    disabled:{type:Boolean,value:false},
    form:{type:String,value:""},
    multiple:{type:Boolean,value:true},
    name:{type:String,value:""},
    required :{type:Boolean,value:true},
    size:{type:Number,value:0},
  },
  data:{
    show:false
  },
  methods: {
    select_click(){
     this.setData({show:true});
    },
    option_change(e){
      //console.log("B",e);
   
      const newValue = e.detail.value;
      const text = e.detail.text;
      this.triggerEvent('change', {newValue}) 
      this.setData({show:false,text});
    }
  }
})
