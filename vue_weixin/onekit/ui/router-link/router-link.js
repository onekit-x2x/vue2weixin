Component({
  options: {
    virtualHost: true
  },
  properties: {
    to:String
  },
  lifetimes:{
    ready(){
      this.changed();
    }
  },
  methods: {
    changed(){
      var that = this;
        const global = getApp().to;
        that.setData({global});
    },
    view_tap(){
     let pages = getCurrentPages();
     let PAGE = pages[pages.length-1]; 
     getApp().to = this.properties.to;
     this.changed();
     PAGE.UC.$router.push(this.properties.to);
    }
  }
})
