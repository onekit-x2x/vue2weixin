Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
      src:{
          type: String,
          value: "",
      },
      autoplay:{
          type: Boolean,
          value: false,
      },
      controls:{
          type: Boolean,
          value: false,
      },
      duration:{
          type: Number,
          value: "",
      },
      loop:{
          type: Boolean,
          value: false,
      },
      muted:{
          type: Boolean,
          value: false,
      },
      poster:{
          type: String,
          value: "",
      },
  },
   methods: {
        video_play(e){
        console.log("video_play", e);
        this.triggerEvent('play',e.details)
        },
        video_loadedmetadata(e){
          console.log("video_loadedmetadata", e);
          this.triggerEvent('loadedmetadata',e.details)
          },
        video_ended(e){
        console.log("video_ended", e);
        this.triggerEvent('ended',e.details)
        },
        
}
});
