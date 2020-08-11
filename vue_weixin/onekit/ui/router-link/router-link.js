Component({
  options: {
    virtualHost: true
  },
  properties: {
    to:String
  },
  methods: {
    view_tap(){
   //   const to = this.properties.to;
     // this.triggerEvent("to",{to},true,true);
     let pages = getCurrentPages();
     let PAGE = pages[pages.length-1]; 
     PAGE.UC.$router.push(this.properties.to);
    }
  }
})
