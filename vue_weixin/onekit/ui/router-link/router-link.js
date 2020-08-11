Component({
  properties: {
    to:String
  },
  methods: {
    view_tap(){
      const to = this.properties.to;
      this.triggerEvent("to",{to},true,true);
    }
  }
})
