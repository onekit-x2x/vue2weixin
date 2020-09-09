// onekit/ui/area/area.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
   
  options: {
    virtualHost: true
  },
  properties: {
    shape:{type:String,value:"",},
    coords:{type:String,value:"",},
  },
  lifetimes: {
    attached: function() {
      console.log(this.properties.coords)
    },

  data: {

  },
  methods: {
    area_tap(){
      console.log("发生点击事件")
    },
  }
}
})
