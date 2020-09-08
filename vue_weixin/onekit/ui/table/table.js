// onekit/ui/table/table.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
 
  options: {
    virtualHost: true
  },
  properties: {
    border:{type:String|Number,value:1},
    cellpadding:{type:String|Number,value:2},
    cellspacing:{type:String|Number,value:1},
    frame:{type:String,value:""},
    rules:{type:String,value:""},
    width:{type:String,value:""},
    border:{type:String,value:""},
    bgcolor:{type:String,value:""},
    align:{type:String,value:"left"}
  },
  lifetimes: {
    attached: function () {
      
      var alignStyle;
      switch(this.data.align){
        case "left":alignStyle="margin-right:auto";break;
        case "center":alignStyle="margin-left:auto;margin-right:auto;";break;
        case "right":alignStyle="margin-left:auto";break;
       default:
         throw new Error(this.data.align);
      }
      this.setData({alignStyle});
     
     var width;
      console.log(this.data.width)
      if(!this.data.width.indexOf("%")){
        width=this.data.width+"px"
      }
      else{
        width=this.data.width
      }
      this.setData({width});
     }
  },
})
