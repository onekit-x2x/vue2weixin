// onekit/ui/h2/h2.js
import onekit_behavior from "../onekit_behavior"
import web_behavior from "../web_behavior"
Component({
  behaviors: [onekit_behavior, web_behavior],
  options: {
    virtualHost: true
  },
   methods: {
    onmousemove:function(e){
      this.triggerEvent(touchmove,e.detail);
    },
    onclick:function(e){
      this.triggerEvent(bindtap,e.detail)
    },
    onmouseup:function(e){
      this.triggerEvent(touchend,e.detail)
    }
  }
})
