import onekit_behavior from "../onekit_behavior"
import vue_behavior from "../vue_behavior"
Component({
  behaviors: [onekit_behavior, vue_behavior],
  options: {
    virtualHost: true
  },
  properties: {
    autoplay:{type: Boolean,value: false,},
    muted:{type: Boolean,value: false,},
    preload:{type: Boolean,value: false,},
      src:{
          type: String,
          value: "",
      },
      controls:{
          type: Boolean,
          value: true,
      },
      loop:{
        type: Boolean,
        value: false,
      },
      
  },
   methods: {
        audio_play(e){
          console.log("audio_play", e);
          this.triggerEvent('play',e.details)
        },
        audio_pause(e){
          console.log("audio_pause", e);
          this.triggerEvent('pause',e.details)
        },
        audio_ended(e){
          console.log("audio_ended", e);
          this.triggerEvent('ended',e.details)
        },
        audio_timeupdate(e){
          console.log("audio_timeupdate", e);
          this.triggerEvent('timeupdate',e.details)
        },
        
}
});
